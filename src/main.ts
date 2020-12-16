import * as path from 'path'
import * as fs from 'fs'

function find_res(pos:string, res:string):string 
{
	while (true)
	{
		let target = path.join(pos, res);
		try {
			fs.accessSync(target, fs.constants.O_DIRECTORY);
			return target;
		} catch (err) {
			let next = path.join(pos, '../');
			if (pos == next)
				return '';
			pos = next;
			continue;
		}
	}

async function open_file(file) {
	return fs.promises.access(file).then(function() {
		return fs.promises.readFile(file);
	}).catch(() => '');
}

function main()
{
	let dir = find_res(__dirname, 'res/');
	if (dir !== '')
	{
		console.log(dir);
		const file = open_file(dir + 'test.lst');
		file.then(function (result) {
			console.log('success open file');
			console.log('-----------------');
			console.log(result.toString());
			console.log('-----------------');
		}).catch(function (err) {
			console.log('failure open file');
			console.log(err);
		});
	}
}

main();
