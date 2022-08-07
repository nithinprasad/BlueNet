npx sequelize-cli db:create

npx sequelize-cli model:generate --name Document --attributes id:BIGINT,partId:string,partName:string,altPartId:string,isShippableFG:string,parentPartId:string,partType:string,supplySource:string,hsnCode:string,client:string,partDoc:string

npx sequelize-cli model:generate --name DocumentHistory --attributes id:BIGINT,docId:BIGINT,revisionid:BIGINT,description:string,preparedBy:string,creadtedOn:date,approvedBy:string,approvedDate:date,data:BIGINT

npx sequelize-cli model:generate --name Data --attributes id:BIGINT,data:JSON

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name Document
npx sequelize-cli seed:generate --name DocumentHistory
npx sequelize-cli seed:generate --name Data