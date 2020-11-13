// import GitHub from 'github-api';
// basic auth
var gh = new GitHub({
   username: 'Applebaumian',
   /* also acceptable:
	*/
	  token: '9607486a3499c89e08c4c881e09b745a88141efb'
});

function getTeamMembers(org, repo){
	let repository = gh.getRepo(org,repo);
	let team = repository.getContributorStats();
	return team;
}
// var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
// me.listNotifications(function(err, notifications) {
//    // do some stuff
// 	console.log(notifications);
// });
//
// var clayreimann = gh.getUser('clayreimann');
// clayreimann.listStarredRepos(function(err, repos) {
//    // look at all the starred repos!
// });
