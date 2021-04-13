/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:30:29.23
*/
gx.evt.autoSkip = false;
gx.define('gamexampleupdateregisteruser', false, function () {
   this.ServerClass =  "gamexampleupdateregisteruser" ;
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
      this.AV6ApplicationClientId=gx.fn.getControlValue("vAPPLICATIONCLIENTID") ;
   };
   this.Validv_Gender=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENDER");
         this.AnyError  = 0;

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
      this.AV43GXV1 = gx.num.trunc( 1 ,0) ;
      while ( this.AV43GXV1 <= this.AV12Errors.length )
      {
         this.AV11Error =  this.AV12Errors[this.AV43GXV1 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV11Error.Message, this.AV11Error.Code, "", "", "", "", "", "", ""));
         this.AV43GXV1 = gx.num.trunc( this.AV43GXV1 + 1 ,0) ;
      }
   };
   this.e1222g2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1422g1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,12,14,17,19,21,24,26,28,31,33,35,38,40,42,45,47,49,56,58,64];
   this.GXLastCtrlId =64;
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"TBNAME2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV22Name",gxold:"OV22Name",gxvar:"AV22Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Name=Value},v2z:function(Value){gx.O.ZV22Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV22Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQEMAIL",gxz:"ZV27ReqEmail",gxold:"OV27ReqEmail",gxvar:"AV27ReqEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ReqEmail=Value},v2z:function(Value){gx.O.ZV27ReqEmail=Value},v2c:function(){gx.fn.setMultimediaValue("vREQEMAIL",gx.O.AV27ReqEmail,gx.O.AV37Reqemail_GXI)},c2v:function(){gx.O.AV37Reqemail_GXI=this.val_GXI();gx.O.AV27ReqEmail=this.val()},val:function(){return gx.fn.getBlobValue("vREQEMAIL")},val_GXI:function(){return gx.fn.getControlValue("vREQEMAIL_GXI")}, gxvar_GXI:'AV37Reqemail_GXI',nac:gx.falseFn};
   GXValidFnc[19]={fld:"TBEMAIL", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAIL",gxz:"ZV10EMail",gxold:"OV10EMail",gxvar:"AV10EMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10EMail=Value},v2z:function(Value){gx.O.ZV10EMail=Value},v2c:function(){gx.fn.setControlValue("vEMAIL",gx.O.AV10EMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10EMail=this.val()},val:function(){return gx.fn.getControlValue("vEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQFIRSTNAME",gxz:"ZV28ReqFirstName",gxold:"OV28ReqFirstName",gxvar:"AV28ReqFirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ReqFirstName=Value},v2z:function(Value){gx.O.ZV28ReqFirstName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQFIRSTNAME",gx.O.AV28ReqFirstName,gx.O.AV38Reqfirstname_GXI)},c2v:function(){gx.O.AV38Reqfirstname_GXI=this.val_GXI();gx.O.AV28ReqFirstName=this.val()},val:function(){return gx.fn.getBlobValue("vREQFIRSTNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQFIRSTNAME_GXI")}, gxvar_GXI:'AV38Reqfirstname_GXI',nac:gx.falseFn};
   GXValidFnc[26]={fld:"TBFIRSTNAME", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFIRSTNAME",gxz:"ZV13FirstName",gxold:"OV13FirstName",gxvar:"AV13FirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13FirstName=Value},v2z:function(Value){gx.O.ZV13FirstName=Value},v2c:function(){gx.fn.setControlValue("vFIRSTNAME",gx.O.AV13FirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13FirstName=this.val()},val:function(){return gx.fn.getControlValue("vFIRSTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[31]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQLASTNAME",gxz:"ZV31ReqLastName",gxold:"OV31ReqLastName",gxvar:"AV31ReqLastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ReqLastName=Value},v2z:function(Value){gx.O.ZV31ReqLastName=Value},v2c:function(){gx.fn.setMultimediaValue("vREQLASTNAME",gx.O.AV31ReqLastName,gx.O.AV39Reqlastname_GXI)},c2v:function(){gx.O.AV39Reqlastname_GXI=this.val_GXI();gx.O.AV31ReqLastName=this.val()},val:function(){return gx.fn.getBlobValue("vREQLASTNAME")},val_GXI:function(){return gx.fn.getControlValue("vREQLASTNAME_GXI")}, gxvar_GXI:'AV39Reqlastname_GXI',nac:gx.falseFn};
   GXValidFnc[33]={fld:"TBLASTNAME", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLASTNAME",gxz:"ZV18LastName",gxold:"OV18LastName",gxvar:"AV18LastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18LastName=Value},v2z:function(Value){gx.O.ZV18LastName=Value},v2c:function(){gx.fn.setControlValue("vLASTNAME",gx.O.AV18LastName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18LastName=this.val()},val:function(){return gx.fn.getControlValue("vLASTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQBIRTHDAY",gxz:"ZV26ReqBirthday",gxold:"OV26ReqBirthday",gxvar:"AV26ReqBirthday",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ReqBirthday=Value},v2z:function(Value){gx.O.ZV26ReqBirthday=Value},v2c:function(){gx.fn.setMultimediaValue("vREQBIRTHDAY",gx.O.AV26ReqBirthday,gx.O.AV40Reqbirthday_GXI)},c2v:function(){gx.O.AV40Reqbirthday_GXI=this.val_GXI();gx.O.AV26ReqBirthday=this.val()},val:function(){return gx.fn.getBlobValue("vREQBIRTHDAY")},val_GXI:function(){return gx.fn.getControlValue("vREQBIRTHDAY_GXI")}, gxvar_GXI:'AV40Reqbirthday_GXI',nac:gx.falseFn};
   GXValidFnc[40]={fld:"TBBIRTHDAY", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBIRTHDAY",gxz:"ZV9Birthday",gxold:"OV9Birthday",gxvar:"AV9Birthday",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Birthday=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9Birthday=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBIRTHDAY",gx.O.AV9Birthday,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9Birthday=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBIRTHDAY")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQGENDER",gxz:"ZV29ReqGender",gxold:"OV29ReqGender",gxvar:"AV29ReqGender",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ReqGender=Value},v2z:function(Value){gx.O.ZV29ReqGender=Value},v2c:function(){gx.fn.setMultimediaValue("vREQGENDER",gx.O.AV29ReqGender,gx.O.AV41Reqgender_GXI)},c2v:function(){gx.O.AV41Reqgender_GXI=this.val_GXI();gx.O.AV29ReqGender=this.val()},val:function(){return gx.fn.getBlobValue("vREQGENDER")},val_GXI:function(){return gx.fn.getControlValue("vREQGENDER_GXI")}, gxvar_GXI:'AV41Reqgender_GXI',nac:gx.falseFn};
   GXValidFnc[47]={fld:"TBGENDER", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Gender,isvalid:null,rgrid:[],fld:"vGENDER",gxz:"ZV14Gender",gxold:"OV14Gender",gxvar:"AV14Gender",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Gender=Value},v2z:function(Value){gx.O.ZV14Gender=Value},v2c:function(){gx.fn.setComboBoxValue("vGENDER",gx.O.AV14Gender);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14Gender=this.val()},val:function(){return gx.fn.getControlValue("vGENDER")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[56]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREQICON",gxz:"ZV30ReqIcon",gxold:"OV30ReqIcon",gxvar:"AV30ReqIcon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ReqIcon=Value},v2z:function(Value){gx.O.ZV30ReqIcon=Value},v2c:function(){gx.fn.setMultimediaValue("vREQICON",gx.O.AV30ReqIcon,gx.O.AV42Reqicon_GXI)},c2v:function(){gx.O.AV42Reqicon_GXI=this.val_GXI();gx.O.AV30ReqIcon=this.val()},val:function(){return gx.fn.getBlobValue("vREQICON")},val_GXI:function(){return gx.fn.getControlValue("vREQICON_GXI")}, gxvar_GXI:'AV42Reqicon_GXI',nac:gx.falseFn};
   GXValidFnc[58]={fld:"TBINFICONREQ", format:0,grid:0};
   GXValidFnc[64]={fld:"TBLBUTTONS",grid:0};
   this.AV22Name = "" ;
   this.ZV22Name = "" ;
   this.OV22Name = "" ;
   this.AV37Reqemail_GXI = "" ;
   this.AV27ReqEmail = "" ;
   this.ZV27ReqEmail = "" ;
   this.OV27ReqEmail = "" ;
   this.AV10EMail = "" ;
   this.ZV10EMail = "" ;
   this.OV10EMail = "" ;
   this.AV38Reqfirstname_GXI = "" ;
   this.AV28ReqFirstName = "" ;
   this.ZV28ReqFirstName = "" ;
   this.OV28ReqFirstName = "" ;
   this.AV13FirstName = "" ;
   this.ZV13FirstName = "" ;
   this.OV13FirstName = "" ;
   this.AV39Reqlastname_GXI = "" ;
   this.AV31ReqLastName = "" ;
   this.ZV31ReqLastName = "" ;
   this.OV31ReqLastName = "" ;
   this.AV18LastName = "" ;
   this.ZV18LastName = "" ;
   this.OV18LastName = "" ;
   this.AV40Reqbirthday_GXI = "" ;
   this.AV26ReqBirthday = "" ;
   this.ZV26ReqBirthday = "" ;
   this.OV26ReqBirthday = "" ;
   this.AV9Birthday = gx.date.nullDate() ;
   this.ZV9Birthday = gx.date.nullDate() ;
   this.OV9Birthday = gx.date.nullDate() ;
   this.AV41Reqgender_GXI = "" ;
   this.AV29ReqGender = "" ;
   this.ZV29ReqGender = "" ;
   this.OV29ReqGender = "" ;
   this.AV14Gender = "" ;
   this.ZV14Gender = "" ;
   this.OV14Gender = "" ;
   this.AV42Reqicon_GXI = "" ;
   this.AV30ReqIcon = "" ;
   this.ZV30ReqIcon = "" ;
   this.OV30ReqIcon = "" ;
   this.AV22Name = "" ;
   this.AV27ReqEmail = "" ;
   this.AV10EMail = "" ;
   this.AV28ReqFirstName = "" ;
   this.AV13FirstName = "" ;
   this.AV31ReqLastName = "" ;
   this.AV18LastName = "" ;
   this.AV26ReqBirthday = "" ;
   this.AV9Birthday = gx.date.nullDate() ;
   this.AV29ReqGender = "" ;
   this.AV14Gender = "" ;
   this.AV30ReqIcon = "" ;
   this.AV6ApplicationClientId = "" ;
   this.AV11Error = {} ;
   this.AV12Errors = [ ] ;
   this.AV43GXV1 = 0 ;
   this.Events = {"e1222g2_client": ["ENTER", true] ,"e1422g1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'this.AV33User.GUID',ctrl:'vUSER',prop:'Guid'},{av:'AV22Name',fld:'vNAME'},{av:'AV10EMail',fld:'vEMAIL'},{av:'AV13FirstName',fld:'vFIRSTNAME'},{av:'AV18LastName',fld:'vLASTNAME'},{av:'AV9Birthday',fld:'vBIRTHDAY'},{av:'AV14Gender',fld:'vGENDER'},{av:'AV6ApplicationClientId',fld:'vAPPLICATIONCLIENTID'}],[{av:'AV16isOK',fld:'vISOK'},{av:'AV32URL',fld:'vURL'},{av:'AV43GXV1',fld:'vGXV1'}]];
   this.EnterCtrl = ["BTNCONFIRM"];
   this.setVCMap("AV6ApplicationClientId", "vAPPLICATIONCLIENTID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexampleupdateregisteruser());
