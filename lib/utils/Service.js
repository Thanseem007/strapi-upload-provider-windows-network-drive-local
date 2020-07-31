let networkDrive = require("windows-network-drive");
const fs = require('fs-extra');
const path = require("path");

module.exports.upload =async(file,FILE_PATH,driveLetter)=>
{
	 try 
	 {
	    let FILE_NAME = `${file.hash}${file.ext}`;
		let filePath = path.join(driveLetter + ":/", FILE_PATH, FILE_NAME);
		fs.ensureFileSync(filePath);
		await fs.writeFile(filePath,file.buffer);
	}
	catch (error) 
	{
	    console.log(error);
	}
return;
}

module.exports.mount =(NETWORK_DRIVE_PATH,username,password)=>
{
 return Promise.resolve()
	/**
	 * Check if the drive is already mounted. Mount it if it is not.
	 */
	.then(() =>
	{
		console.log("Testing if '" + NETWORK_DRIVE_PATH + "' is already mounted");
		return networkDrive.find(NETWORK_DRIVE_PATH);
	})
	.then((driveLetters) =>
	{
		if (0 < driveLetters.length)
		{
			console.log("The drive is already mounted. Returning the first drive (" + driveLetters[0] + ") letter because they all point to the same place.");
			return driveLetter= driveLetters[0];
		}
		else
		{
			console.log("The path is not mounted. Mount the path");
			return driveLetter= networkDrive.mount(NETWORK_DRIVE_PATH, undefined, username, password);
		}
	})
	.then((driveLetter) =>
	{
		return driveLetter;
	})
}

module.exports.delete=async(file,FILE_PATH,driveLetter)=>
{
	let FILE_NAME = `${file.hash}${file.ext}`;
    let filePath = path.join(driveLetter + ":/", FILE_PATH, FILE_NAME);
	fs.unlink(filePath, (err) => {
		if (err) {
		  console.error(err)
		  return
		}
	  })

}






