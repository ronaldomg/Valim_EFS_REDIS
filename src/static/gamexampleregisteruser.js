/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:50.1
*/
gx.evt.autoSkip = false;
gx.define('gamexampleregisteruser', false, function () {
   this.ServerClass =  "gamexampleregisteruser" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Gender=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENDER");
         this.AnyError  = 0;
         if ( ! ( this.AV11Gender == "N" || this.AV11Gender == "F" || this.AV11Gender == "M" ) )
         {
            try {
               gxballoon.setError("Campo Gender fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      this.AV42GXV2 = gx.num.trunc( 1 ,0) ;
      while ( this.AV42GXV2 <= this.AV9Errors.length )
      {
         this.AV8Error =  this.AV9Errors[this.AV42GXV2 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV8Error.Message, this.AV8Error.Code, "", "", "", "", "", "", ""));
         this.AV42GXV2 = gx.num.trunc( this.AV42GXV2 + 1 ,0) ;
      }
   };
   this.e1222j2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1422j1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,11,13,15,18,20,22,25,27,29,32,34,36,39,41,43,46,48,50,57,59,61,64,66,68,75,77,83];
   this.GXLastCtrlId =83;
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQNAME",gxz:"ZV27ReqName",gxold:"OV27ReqName",gxvar:"AV27ReqName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ReqName=Value},v2z:function(Value){gx.O.ZV27ReqName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQNAME",gx.O.AV27ReqName,gx.O.AV33Reqname_GXI)},c2v:function(){gx.O.AV33Reqname_GXI=this.val_GXI();gx.O.AV27ReqName=this.val()},val:function(){return gx.fn.getBlobValue("vREQNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQNAME_GXI")}, gxvar_GXI:'AV33Reqname_GXI',nac:gx.falseFn};
   GXValidFnc[13]={fld:"TBNAME2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV17Name",gxold:"OV17Name",gxvar:"AV17Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17Name=Value},v2z:function(Value){gx.O.ZV17Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV17Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV17Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 15 , function() {
   });
   GXValidFnc[18]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQEMAIL",gxz:"ZV22ReqEmail",gxold:"OV22ReqEmail",gxvar:"AV22ReqEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ReqEmail=Value},v2z:function(Value){gx.O.ZV22ReqEmail=Value},v2c:function(){gx.fn.setMultimediaValue("vREQEMAIL",gx.O.AV22ReqEmail,gx.O.AV34Reqemail_GXI)},c2v:function(){gx.O.AV34Reqemail_GXI=this.val_GXI();gx.O.AV22ReqEmail=this.val()},val:function(){return gx.fn.getBlobValue("vREQEMAIL")},val_GXI:function(){return gx.fn.getControlValue("vREQEMAIL_GXI")}, gxvar_GXI:'AV34Reqemail_GXI',nac:gx.falseFn};
   GXValidFnc[20]={fld:"TBEMAIL", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAIL",gxz:"ZV7EMail",gxold:"OV7EMail",gxvar:"AV7EMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7EMail=Value},v2z:function(Value){gx.O.ZV7EMail=Value},v2c:function(){gx.fn.setControlValue("vEMAIL",gx.O.AV7EMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7EMail=this.val()},val:function(){return gx.fn.getControlValue("vEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQFIRSTNAME",gxz:"ZV23ReqFirstName",gxold:"OV23ReqFirstName",gxvar:"AV23ReqFirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ReqFirstName=Value},v2z:function(Value){gx.O.ZV23ReqFirstName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQFIRSTNAME",gx.O.AV23ReqFirstName,gx.O.AV35Reqfirstname_GXI)},c2v:function(){gx.O.AV35Reqfirstname_GXI=this.val_GXI();gx.O.AV23ReqFirstName=this.val()},val:function(){return gx.fn.getBlobValue("vREQFIRSTNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQFIRSTNAME_GXI")}, gxvar_GXI:'AV35Reqfirstname_GXI',nac:gx.falseFn};
   GXValidFnc[27]={fld:"TBFIRSTNAME", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFIRSTNAME",gxz:"ZV10FirstName",gxold:"OV10FirstName",gxvar:"AV10FirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FirstName=Value},v2z:function(Value){gx.O.ZV10FirstName=Value},v2c:function(){gx.fn.setControlValue("vFIRSTNAME",gx.O.AV10FirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10FirstName=this.val()},val:function(){return gx.fn.getControlValue("vFIRSTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQLASTNAME",gxz:"ZV26ReqLastName",gxold:"OV26ReqLastName",gxvar:"AV26ReqLastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ReqLastName=Value},v2z:function(Value){gx.O.ZV26ReqLastName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQLASTNAME",gx.O.AV26ReqLastName,gx.O.AV36Reqlastname_GXI)},c2v:function(){gx.O.AV36Reqlastname_GXI=this.val_GXI();gx.O.AV26ReqLastName=this.val()},val:function(){return gx.fn.getBlobValue("vREQLASTNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQLASTNAME_GXI")}, gxvar_GXI:'AV36Reqlastname_GXI',nac:gx.falseFn};
   GXValidFnc[34]={fld:"TBLASTNAME", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLASTNAME",gxz:"ZV13LastName",gxold:"OV13LastName",gxvar:"AV13LastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13LastName=Value},v2z:function(Value){gx.O.ZV13LastName=Value},v2c:function(){gx.fn.setControlValue("vLASTNAME",gx.O.AV13LastName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13LastName=this.val()},val:function(){return gx.fn.getControlValue("vLASTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQBIRTHDAY",gxz:"ZV21ReqBirthday",gxold:"OV21ReqBirthday",gxvar:"AV21ReqBirthday",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ReqBirthday=Value},v2z:function(Value){gx.O.ZV21ReqBirthday=Value},v2c:function(){gx.fn.setMultimediaValue("vREQBIRTHDAY",gx.O.AV21ReqBirthday,gx.O.AV37Reqbirthday_GXI)},c2v:function(){gx.O.AV37Reqbirthday_GXI=this.val_GXI();gx.O.AV21ReqBirthday=this.val()},val:function(){return gx.fn.getBlobValue("vREQBIRTHDAY")},val_GXI:function(){return gx.fn.getControlValue("vREQBIRTHDAY_GXI")}, gxvar_GXI:'AV37Reqbirthday_GXI',nac:gx.falseFn};
   GXValidFnc[41]={fld:"TBBIRTHDAY", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBIRTHDAY",gxz:"ZV6Birthday",gxold:"OV6Birthday",gxvar:"AV6Birthday",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6Birthday=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV6Birthday=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBIRTHDAY",gx.O.AV6Birthday,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6Birthday=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBIRTHDAY")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQGENDER",gxz:"ZV24ReqGender",gxold:"OV24ReqGender",gxvar:"AV24ReqGender",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ReqGender=Value},v2z:function(Value){gx.O.ZV24ReqGender=Value},v2c:function(){gx.fn.setMultimediaValue("vREQGENDER",gx.O.AV24ReqGender,gx.O.AV38Reqgender_GXI)},c2v:function(){gx.O.AV38Reqgender_GXI=this.val_GXI();gx.O.AV24ReqGender=this.val()},val:function(){return gx.fn.getBlobValue("vREQGENDER")},val_GXI:function(){return gx.fn.getControlValue("vREQGENDER_GXI")}, gxvar_GXI:'AV38Reqgender_GXI',nac:gx.falseFn};
   GXValidFnc[48]={fld:"TBGENDER", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Gender,isvalid:null,rgrid:[],fld:"vGENDER",gxz:"ZV11Gender",gxold:"OV11Gender",gxvar:"AV11Gender",ucs:[],op:[50],ip:[50],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11Gender=Value},v2z:function(Value){gx.O.ZV11Gender=Value},v2c:function(){gx.fn.setComboBoxValue("vGENDER",gx.O.AV11Gender);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11Gender=this.val()},val:function(){return gx.fn.getControlValue("vGENDER")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQPASSWORD",gxz:"ZV28ReqPassword",gxold:"OV28ReqPassword",gxvar:"AV28ReqPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ReqPassword=Value},v2z:function(Value){gx.O.ZV28ReqPassword=Value},v2c:function(){gx.fn.setMultimediaValue("vREQPASSWORD",gx.O.AV28ReqPassword,gx.O.AV39Reqpassword_GXI)},c2v:function(){gx.O.AV39Reqpassword_GXI=this.val_GXI();gx.O.AV28ReqPassword=this.val()},val:function(){return gx.fn.getBlobValue("vREQPASSWORD")},val_GXI:function(){return gx.fn.getControlValue("vREQPASSWORD_GXI")}, gxvar_GXI:'AV39Reqpassword_GXI',nac:gx.falseFn};
   GXValidFnc[59]={fld:"TBPWD", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPASSWORD",gxz:"ZV18Password",gxold:"OV18Password",gxvar:"AV18Password",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Password=Value},v2z:function(Value){gx.O.ZV18Password=Value},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV18Password,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18Password=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQPASSWORD",gxz:"ZV28ReqPassword",gxold:"OV28ReqPassword",gxvar:"AV28ReqPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ReqPassword=Value},v2z:function(Value){gx.O.ZV28ReqPassword=Value},v2c:function(){gx.fn.setMultimediaValue("vREQPASSWORD",gx.O.AV28ReqPassword,gx.O.AV39Reqpassword_GXI)},c2v:function(){gx.O.AV39Reqpassword_GXI=this.val_GXI();gx.O.AV28ReqPassword=this.val()},val:function(){return gx.fn.getBlobValue("vREQPASSWORD")},val_GXI:function(){return gx.fn.getControlValue("vREQPASSWORD_GXI")}, gxvar_GXI:'AV39Reqpassword_GXI',nac:gx.falseFn};
   GXValidFnc[66]={fld:"TBPWDCONF", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPASSWORDCONF",gxz:"ZV19PasswordConf",gxold:"OV19PasswordConf",gxvar:"AV19PasswordConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PasswordConf=Value},v2z:function(Value){gx.O.ZV19PasswordConf=Value},v2c:function(){gx.fn.setControlValue("vPASSWORDCONF",gx.O.AV19PasswordConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19PasswordConf=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORDCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[75]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQICON",gxz:"ZV25ReqIcon",gxold:"OV25ReqIcon",gxvar:"AV25ReqIcon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ReqIcon=Value},v2z:function(Value){gx.O.ZV25ReqIcon=Value},v2c:function(){gx.fn.setMultimediaValue("vREQICON",gx.O.AV25ReqIcon,gx.O.AV40Reqicon_GXI)},c2v:function(){gx.O.AV40Reqicon_GXI=this.val_GXI();gx.O.AV25ReqIcon=this.val()},val:function(){return gx.fn.getBlobValue("vREQICON")},val_GXI:function(){return gx.fn.getControlValue("vREQICON_GXI")}, gxvar_GXI:'AV40Reqicon_GXI',nac:gx.falseFn};
   GXValidFnc[77]={fld:"TBINFICONREQ", format:0,grid:0};
   GXValidFnc[83]={fld:"TBLBUTTONS",grid:0};
   this.AV33Reqname_GXI = "" ;
   this.AV27ReqName = "" ;
   this.ZV27ReqName = "" ;
   this.OV27ReqName = "" ;
   this.AV17Name = "" ;
   this.ZV17Name = "" ;
   this.OV17Name = "" ;
   this.AV34Reqemail_GXI = "" ;
   this.AV22ReqEmail = "" ;
   this.ZV22ReqEmail = "" ;
   this.OV22ReqEmail = "" ;
   this.AV7EMail = "" ;
   this.ZV7EMail = "" ;
   this.OV7EMail = "" ;
   this.AV35Reqfirstname_GXI = "" ;
   this.AV23ReqFirstName = "" ;
   this.ZV23ReqFirstName = "" ;
   this.OV23ReqFirstName = "" ;
   this.AV10FirstName = "" ;
   this.ZV10FirstName = "" ;
   this.OV10FirstName = "" ;
   this.AV36Reqlastname_GXI = "" ;
   this.AV26ReqLastName = "" ;
   this.ZV26ReqLastName = "" ;
   this.OV26ReqLastName = "" ;
   this.AV13LastName = "" ;
   this.ZV13LastName = "" ;
   this.OV13LastName = "" ;
   this.AV37Reqbirthday_GXI = "" ;
   this.AV21ReqBirthday = "" ;
   this.ZV21ReqBirthday = "" ;
   this.OV21ReqBirthday = "" ;
   this.AV6Birthday = gx.date.nullDate() ;
   this.ZV6Birthday = gx.date.nullDate() ;
   this.OV6Birthday = gx.date.nullDate() ;
   this.AV38Reqgender_GXI = "" ;
   this.AV24ReqGender = "" ;
   this.ZV24ReqGender = "" ;
   this.OV24ReqGender = "" ;
   this.AV11Gender = "" ;
   this.ZV11Gender = "" ;
   this.OV11Gender = "" ;
   this.AV39Reqpassword_GXI = "" ;
   this.AV28ReqPassword = "" ;
   this.ZV28ReqPassword = "" ;
   this.OV28ReqPassword = "" ;
   this.AV18Password = "" ;
   this.ZV18Password = "" ;
   this.OV18Password = "" ;
   this.AV19PasswordConf = "" ;
   this.ZV19PasswordConf = "" ;
   this.OV19PasswordConf = "" ;
   this.AV40Reqicon_GXI = "" ;
   this.AV25ReqIcon = "" ;
   this.ZV25ReqIcon = "" ;
   this.OV25ReqIcon = "" ;
   this.AV27ReqName = "" ;
   this.AV17Name = "" ;
   this.AV22ReqEmail = "" ;
   this.AV7EMail = "" ;
   this.AV23ReqFirstName = "" ;
   this.AV10FirstName = "" ;
   this.AV26ReqLastName = "" ;
   this.AV13LastName = "" ;
   this.AV21ReqBirthday = "" ;
   this.AV6Birthday = gx.date.nullDate() ;
   this.AV24ReqGender = "" ;
   this.AV11Gender = "" ;
   this.AV28ReqPassword = "" ;
   this.AV18Password = "" ;
   this.AV19PasswordConf = "" ;
   this.AV25ReqIcon = "" ;
   this.AV8Error = {} ;
   this.AV9Errors = [ ] ;
   this.AV42GXV2 = 0 ;
   this.Events = {"e1222j2_client": ["ENTER", true] ,"e1422j1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV18Password',fld:'vPASSWORD'},{av:'AV19PasswordConf',fld:'vPASSWORDCONF'},{av:'AV17Name',fld:'vNAME'},{av:'AV7EMail',fld:'vEMAIL'},{av:'AV10FirstName',fld:'vFIRSTNAME'},{av:'AV13LastName',fld:'vLASTNAME'},{av:'AV6Birthday',fld:'vBIRTHDAY'},{av:'AV11Gender',fld:'vGENDER'},{av:'AV30UserRememberMe',fld:'vUSERREMEMBERME'}],[{av:'AV14LoginOK',fld:'vLOGINOK'},{av:'AV16Messages',fld:'vMESSAGES'},{av:'AV41GXV1',fld:'vGXV1'},{av:'AV15Message',fld:'vMESSAGE'},{av:'AV42GXV2',fld:'vGXV2'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleregisteruser());
