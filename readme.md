<h2> Demo Office Management System</h2>
<h4>Descriptions</h4>
<p>Demo Project . Made for Shorol hiring project</p>
<sub> All limitations has given willingly </sub>

<hr/>
<h4> CRUD Operations </h4>
<div>
    <table>
        <thead>
            <tr>
                <th>Actions</th>
                <th>Permision</th>
                <th> Remarks </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>View</td>
                <td> All </td>
                <td>  </td>
            </tr>
            <tr>
                <td>Create</td>
                <td> super_admin </td>
                <td> Backend Validation </td>
            </tr>
            <tr>
                <td>Update</td>
                <td> All </td>
                <td> super_admin can update all user, but user can only update their name & email . Password can't be updated (limitations) <br/> super_admin & user can't update their own role. But other super_admin can update all user's role. </td>
            </tr>
            <tr>
                <td>Delete User</td>
                <td> super_admin </td>
                <td> super_admin can delete any user, but can't delete self </td>
            </tr>
             <tr>
                <td>Export User Credential</td>
                <td> super_admin </td>
                <td> super_admin can Export All User Credential <br/> <b>Limitation: </b> Headers and Password field is not showing </td>
            </tr>
        </tbody>
    </table>
</div>
