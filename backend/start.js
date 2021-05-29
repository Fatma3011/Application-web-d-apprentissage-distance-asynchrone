

// const { PythonShell } = require('python-shell');

// let options = {
//     mode: 'text',
//     pythonPath: 'python',
//     pythonOptions: ['-u'], // get print results in real-time
//     scriptPath: __dirname,
//     args: []
// };

// PythonShell.run('hello.py', options, function(err, results) {
//    if (err) console.log(err);
//     // results is an array consisting of messages collected during execution
//     console.log('results: %j', results);
// });











	var spawn = require("child_process").spawn;

	var process  = spawn('python3',['hello.py','arg1','arg2']);
	process.stdout.on('data',function(data){
		console.log("py")
		res.send(data.toString());
	});

process.stderr.on('data', (data) => {
		pconsole.log(`error:${data}`);
	 });
	process.stderr.on('close', () => {
		console.log("Closed");
	 });
