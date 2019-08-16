<html>
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
            <tr>
                <td>Import User Credential</td>
                <td> super_admin </td>
                <td> super_admin can Import User Credential as xlsx,xls,csv format. This file will be saved in upload folder under public folder. </td>
            </tr>
        </tbody>
    </table>
    <div>
        <h2>Youtube Demo</h2>
        <div>
           <b>Visit: </b> <a href="https://youtu.be/eh2TEzPfLxo" target="_blank"> OMS DEMO </a>
        </div>
    </div>
</div>
<hr/>
<div>
        <h2>Installation Guide</h2>
    </div>
    <h3> Step 1</h3>
    <p>
        Clonning Project:- <strong> git clone https://github.com/mahbubevan/OMS.git </strong>
    </p>
    <h3> Step 2</h3>
    <div>
        <ul>
        <li>
            Having Composer:- <a href="https://getcomposer.org/download/" target="_blank">Get Composer</a> 
        </li>
        <li>
            Go to project folder and open command prompt and excute command <strong>composer i</strong>
        </li>
        </ul>
    </div>
    <h3> Step 3</h3>
    <div>
        <ul>
        <li>
            Having Node:- <a href="https://nodejs.org/en/download/" target="_blank">Download Node</a> 
        </li>
        <li>
            Go to project folder and open command prompt and excute command <strong>npm i</strong>
        </li>
        </ul>
    </div>
    <h3> Step 4</h3>
    <div>
        <ul>
        <li>
            Setup ENV file:- Type command <strong> cp .env.example .env </strong> 
        </li>
        <li>
            Generate an encryption key <strong> php artisan key:generate </strong>
            <br/> This will generate key in your .env file.
        </li>
        <li>
            Create database in phpmyadmin
        </li>
        <li>
            Setup your <strong>Database credential </strong> in .env file
        </li>
        </ul>
    </div>
    <h3> Step 5</h3>
    <div>
        <ul>
        <li>
            Migrating Database:- <strong> php artisan migrate </strong>
        </li>
        <li>
            Now Import user.sql file to your database.
        </li>
        <li>
            OR, you can seed data.
            Go to "database/factories/UserFactory.php" and change value of role "user" and execute command <strong> php aritsan db:seed </strong>
            <br/>Again, change value of role "super_user" and execute command <strong> php aritsan db:seed </strong>
        </li>
        </ul>
        <table>
            <tr>
                <td>
                    <img src="https://drive.google.com/uc?export=view&id=12O8zpsTBVGSUSTBiSeBqBWkoPxMCCEDS" height="100px" width="100px"/>
                </td>
                <td>
                    <img src="https://drive.google.com/uc?export=view&id=1Rp6Gc0Z222BbdXcto7HIhFjAtvr24wwA" height="100px" width="100px"/>
                </td>
            </tr>
        </table>
    </div>
    <h3> Step 6</h3>
    <div>
        Run Laravel Artisan Command <strong> php artisan serve </strong>
    </div>
    <div>
         If you import given <strong>users.sql</strong> Find the emails on the excel file and use password <strong> "secret" </strong> or <strong> "12345678" </strong>
    </div>
</html>