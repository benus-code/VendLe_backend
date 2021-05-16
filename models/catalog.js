const mongoose=require('mongoose')
const { Schema } = mongoose;

  const catalogueSchema = new Schema{
	name:{
		type:String,
		required:true
	},
	userID:{
		type:String,
        required:true
	},
	color:{
		type:String
	},
	productsID:[String],
	dateCreated:{
    	type:Date,
        default:Date.now();
    },
    dateUpdated:{
    	type:Date
    },
    history:[{
        oldrecord:[String],
        newrecord:[String],
        Datecreated:{
            type:Date
        }
    }]
}

/*Recommended
-Name
-userID
*/