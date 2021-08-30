const mongoose=require('mongoose');
const { Schema } = mongoose;

  const ProductSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	contact:{
		type:Number,
	},
	photosUrls:[String],
	category:{
		type:String,
		required:true
	},
	city:{
		type:String
	},
	country:{
		type:String
	},
	quarter:{
		type:String
	},
    price:{
    	type:Number,
    	required:true
    },
    view:{
    	type:Number,
		default : 0
    },
    authorID:{
    	type:String,
    	required:true
    },
	 interested:[String]
    ,
    dateCreated:{
    	type:Date,
        default:Date.now()
    },
    dateUpdated:{
    	type:Date
    },
   like:{
   	type:Number
    },
    signal:{
    	value:Boolean,
    	reason:String
    },
    promotionStatus:{
    	value:Boolean,
    	planID:String
    },
    status:{
        //status du produit (s'il est vendu ou non)
        type:String
    },
    history:[{
        oldrecord:[String],
        newrecord:[String],
        Datecreated:{
            type:Date
        }
    }]
})

module.exports=mongoose.model('Product',ProductSchema);
/*recommended
-Name
-Description
-Category
*/