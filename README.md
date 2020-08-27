# back-end
# Schema Design
# Endpoints
<h4>Register new user</h4>
<li>https://how-to-1.herokuapp.com/api/users/register</li>
<h4>Login</h4>
<li>https://how-to-1.herokuapp.com/api/users/login</li>
<h4>GET all hacks</h4>
<li>https://how-to-1.herokuapp.com/api/howTo</li>
<h4>GET steps for hacks</h4>
<li>https://how-to-1.herokuapp.com/api/howTo/steps</li>
<h4>POST create new hack</h4>
<h5>must include: {"title":"title of new hack", "description":"description of new hack", "userID": <span>userID given upon registration</span>}
<li>https://how-to-1.herokuapp.com/api/howTo</li>
<h4>POST create new step</h4>
<h5>must include: {"step":"contents of step", "hackID": <span>id of associated hack</span>}
<li>https://how-to-1.herokuapp.com/api/howTo/steps</li>
<h4>PUT updates hack</h4>
<li>https://how-to-1.herokuapp.com/api/howTo/:id</li>
<h4>PUT updates step</h4>
<li>https://how-to-1.herokuapp.com/api/howTo/steps/:id</li>
<h4>DELETE hack</h4>
<li>https://how-to-1.herokuapp.com/api/howTo/:id</li>
<h4>DELETE step</h4>
<li>https://how-to-1.herokuapp.com/api/howTo/steps/:id</li>

