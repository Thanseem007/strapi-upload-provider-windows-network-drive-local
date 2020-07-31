const service = require('./utils/Service');

module.exports = {
  init: config => {
    const {NETWORK_DRIVE_PATH,username,password,FILE_PATH,baseUrl } = config;
    return {
      upload: async (file) => {
        try 
        {
          let driveletter=await service.mount(NETWORK_DRIVE_PATH,username,password);
          service.upload(file,FILE_PATH,driveletter);
          let fileName=`${file.hash}${file.ext}`;
          file.public_id = fileName;
          file.url = `${baseUrl}${fileName}`;
        } 
        catch (e) 
        {
          console.error(e);
        }
        return file;
      },
      delete: async (file) => {
        try 
        {
          let driveletter=await service.mount(NETWORK_DRIVE_PATH,username,password);
          service.delete(file,FILE_PATH,driveletter);
        }
        catch(e)
        {
          console.error(e);
        }
        return file;
      }
    };
  },
};