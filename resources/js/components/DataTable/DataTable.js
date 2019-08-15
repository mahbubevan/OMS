import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label,Input, Spinner
} from 'reactstrap';
import { throws } from 'assert';

class DataTable extends Component{
    constructor(props){
        super(props)

        this.state = {
            result:[],
            status:false,
            current_page:0,
            from:0,
            last_page:0,
            first_page_url:'',
            last_page_url:'',
            next_page_url:'',
            per_page:0,
            prev_page_url:'',
            to:0,
            total:0,
            modal:false,
            username:'',
            email:'',
            role:'admin',
            password:'',
            responseError:[],
            resStatus:'',
            editModal:false,
                editUsername:'',
                editEmail:'',
                uid:0,
                editRole:'',
            authorization:[],
            auth_user:[],
            index:0
        }

        this.nextPageHandler = this.nextPageHandler.bind(this)
        this.prevPageHandler = this.prevPageHandler.bind(this)

        //New Item
        this.toggle = this.toggle.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.submitForm = this.submitForm.bind(this);

        this.editModalToggle = this.editModalToggle.bind(this)

    }

    //New Item

    submitForm(){
        const userCredential = {
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            role:this.state.role
        }
        axios.post('/data',userCredential)
            .then(res=> this.setState({
                result:[res.data.data,...this.state.result],
                resStatus:res.data.status,
                total:this.state.total+1,
                to:this.state.to+1,
                responseError:''
            }))
            .catch(err=>this.setState({
                responseError:JSON.parse(err.request.responseText).errors,
            }))

            //this.toggle()
    }

    toggle(){
        this.setState({
            modal: !this.state.modal,
            username:'',
            email:'',
            password:'',
            resStatus:''
        })
    }

    setInputValue(event){
        this.setState({
            [event.target.name]:event.target.value,
            resStatus:'',
            responseError:[]
        })
    }

    //

    componentDidMount(){
        axios.get('/data')
            .then(res=>{
                //console.log(res.data[0]);
                //console.log(res)
                this.setState({
                    result:res.data[0].data,
                    auth_user:res.data[1],
                    status:true,
                    current_page:res.data[0].current_page,
                    from:res.data[0].from,
                    last_page:res.data[0].last_page,
                    last_page_url:res.data[0].last_page_url,
                    first_page_url:res.data[0].first_page_url,
                    next_page_url:res.data[0].next_page_url,
                    per_page:res.data[0].per_page,
                    prev_page_url:res.data[0].prev_page_url,
                    to:res.data[0].to,
                    total:res.data[0].total
                })
            })
    }

    nextPageHandler(){
        const url = this.state.next_page_url
        // $.getJSON(url,function(data){
        //     console.log(data);
        //     this.setState({
        //         result:data[0].data
        //     })
        // }.bind(this))
        $.getJSON(url)
            .then(data=>{
                console.log(data);
                this.setState({
                    result:data[0].data,
                    current_page:data[0].current_page,
                    from:data[0].from,
                    last_page:data[0].last_page,
                    last_page_url:data[0].last_page_url,
                    first_page_url:data[0].first_page_url,
                    next_page_url:data[0].next_page_url,
                    per_page:data[0].per_page,
                    prev_page_url:data[0].prev_page_url,
                    to:data[0].to,
                    total:data[0].total,
                    resStatus:''
                })
            })
    }

    prevPageHandler(){
        const url = this.state.prev_page_url
        $.getJSON(url)
            .then(data=>{
                this.setState({
                    result:data[0].data,
                    current_page:data[0].current_page,
                    from:data[0].from,
                    last_page:data[0].last_page,
                    last_page_url:data[0].last_page_url,
                    first_page_url:data[0].first_page_url,
                    next_page_url:data[0].next_page_url,
                    per_page:data[0].per_page,
                    prev_page_url:data[0].prev_page_url,
                    to:data[0].to,
                    total:data[0].total,
                    resStatus:''
                })
            })
    }

    editModalToggle(){
        this.setState({
            editModal:!this.state.editModal,
            resStatus:''
        })
    }

    editUser(id,name,email,role,index){
        //const uid = id.toString();
        //const uid = index+1
        // console.log(uid)
        // console.log(index)
        this.editModalToggle()
        
        this.setState({
                editUsername:name,
                editEmail:email,
                uid:id,
                editRole:role,
                index
        })
        //console.log(id)
        //console.log(index)
        //console.log(this.state.uid)
    }

    onUpdate(id,name,email,role,index){
        //const id = event.target.value
        const url = `data/${id}`
        //const index = id-1
        //const {result} = this.state
        const {result} = this.state
        const newData = {
            name,
            email,
            role
        }
        //console.log(result[index]);
        axios.put(url,newData)
            .then(res=>{
                //console.log(res.data.data.name)
                result[index].name = res.data.data.name
                result[index].email = res.data.data.email
                result[index].role = res.data.data.role
                result[index].updated_at = res.data.data.updated_at
                this.setState({
                    result,
                    resStatus:res.data.status
                })
            })
            .catch(err=>this.setState({
                responseError:err.response.status
            }))
        
    }

    deleteUser(id){
        if(!window.confirm('Are you sure ?')){
            console.log('Canceled')
        }else{
            axios.delete(`data/${id}`)
                .then(res=> this.setState({
                    resStatus:res.data.msg,
                    total:this.state.total-1,
                    to:this.state.to-1,
                    result:this.state.result.filter(
                        i => i.id !==id
                    )
                }))
        }
    }


    render(){
        //console.log(this.state.auth_user)
        //const data = 
        return(
            <div>
                <div className="container-fluid d-flex mb-2">
                    {
                        this.state.auth_user.role === 'user' ? <div> </div> :
                            <div className="d-flex">
                                <div className="ml-1 mr-1">
                                    <button className="btn btn-md btn-primary" onClick={this.toggle}> Add New </button>
                                </div>
                                <div className="ml-1 mr-1">
                                    <button className="btn btn-md btn-primary"> Import </button>
                                </div>
                                <div className="ml-1 mr-1">
                                    <button className="btn btn-md btn-primary"> Export </button>
                                </div>
                            </div>
                    }
                    <div className="ml-auto">
                        <div className="pt-2">
                            <span className="btn btn-sm btn-disabled btn-success text-white btn-block"> Total Records: {this.state.total} </span>
                        </div>
                        <div className="pt-2">
                            <span className="btn btn-sm btn-disabled btn-success text-white btn-block"> Result Showing: {this.state.from} to {this.state.to} </span>
                        </div>
                        <div className="pt-2">
                            <span className="btn btn-sm btn-disabled btn-success text-white btn-block"> Current Page: {this.state.current_page} of {this.state.last_page} </span>
                        </div>
                    </div>
                </div>
                <div className="text-center text-success"> <h5> {this.state.resStatus} </h5> </div>
            {
                this.state.status ? 
                <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data} */}
                            {
                                this.state.result.map(
                                    (i,id)=>(
                                    <tr key={id}>
                                        <td> {i.id} </td>
                                        <td> {i.name} </td>
                                        <td> {i.email} </td>
                                        <td> {i.role} </td>
                                        <td> 
                                            <div className="d-flex">
                                                {
                                                    this.state.auth_user.role === 'super_admin' || this.state.auth_user.id === i.id ? 
                                                    <div className="pr-1">
                                                        <button className="btn btn-sm btn-info" onClick={this.editUser.bind(this,i.id,i.name,i.email,i.role,id)}>Edit</button>
                                                    </div>
                                                    :<div> </div>
                                                    
                                                }
                                                {
                                                    this.state.auth_user.id === i.id || this.state.auth_user.role === 'user' ? <div> </div> :
                                                    <div className="pl-1">
                                                        <button className="btn btn-sm btn-danger" onClick={this.deleteUser.bind(this,i.id)}>Delete</button>
                                                    </div>
                                                }
                                            </div>    
                                        </td>
                                        <td> {i.created_at} </td>
                                        <td> {i.updated_at} </td>
                                    </tr>
                                    )
                                )
                            }
                    </tbody>
                </table>

                <div className="text-center">
                    <span className="pr-1">
                            {
                                this.state.prev_page_url === null ? <button disabled className="btn btn-md btn-primary">Prev Page</button> :
                                <button onClick={this.prevPageHandler} className="btn btn-md btn-primary">Prev Page</button>
                            }         
                    </span>
                    <span className="pl-1">        
                            {
                                this.state.next_page_url === null ? <button disabled className="btn btn-md btn-primary">Next Page</button> :
                                <button onClick={this.nextPageHandler} className="btn btn-md btn-primary">Next Page</button>
                            }                      
                    </span>
                </div>
            </div> : <span> <Spinner color="Primary"/>  </span>
            }

            {/*Add Modal */}
            <Modal isOpen={this.state.modal}  toggle={this.toggle}>
                        
                    <ModalHeader >Add New User
                    <div>
                        <span className="text-success">{this.state.resStatus}</span>
                    </div>
                    </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <span>  </span>
                                    <Input 
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange = {this.setInputValue}
                                    />
                                    <span className="text-danger"></span>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input 
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange = {this.setInputValue}
                                    />
                                    <span className="text-danger"> {this.state.responseError.password} </span>
                                </FormGroup>
                                <FormGroup>
                                    
                                    <Label>Email</Label>
                                    <Input 
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange = {this.setInputValue}
                                    />
                                    <span className="text-danger"> {this.state.responseError.email} </span>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Role</Label>
                                    <Input 
                                        type="select"
                                        name="role"
                                        value={this.state.role}
                                        onChange={this.setInputValue}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.submitForm}>Add</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                </Modal>
                {/* End Add Modal */}


                {/* Edit Modal */}
                <Modal isOpen={this.state.editModal} toggle={this.editModalToggle}>
                    <ModalHeader >Edit User
                        <div>
                            {
                                this.state.responseError === 500 ? <span className="text-danger">Coudn't Updated </span>
                                : <span className="text-success">{this.state.resStatus}</span>
                            }
                        </div>
                    </ModalHeader>
                    <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <span>  </span>
                                    <Input 
                                        type="text"
                                        name="editUsername"
                                        value={this.state.editUsername}
                                        onChange = {this.setInputValue}
                                    />
                                    <span className="text-danger"></span>
                                </FormGroup>
                                <FormGroup>
                                    
                                    <Label>Email</Label>
                                    <Input 
                                        type="email"
                                        name="editEmail"
                                        value={this.state.editEmail}
                                        onChange = {this.setInputValue}
                                    />
                                    <span className="text-danger"> {this.state.responseError.email} </span>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Role</Label>
                                    <Input 
                                        type="select"
                                        name="editRole"
                                        value={this.state.editRole}
                                        onChange={this.setInputValue}
                                        disabled={this.state.auth_user.role !== 'super_admin'}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button  onClick={this.onUpdate.bind(this,this.state.uid,this.state.editUsername,this.state.editEmail,this.state.editRole,this.state.index)}>Update</Button>
                            <Button color="secondary" onClick={this.editModalToggle}>Cancel</Button>
                        </ModalFooter>
                </Modal>
                {/* End Edit Modal */}
                
                {/* Delete Modal */}
                {/* End Delete Modal */}

            </div>
        )
    }
}

export default DataTable;