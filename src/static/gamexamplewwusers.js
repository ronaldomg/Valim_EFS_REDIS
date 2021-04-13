/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:26:57.39
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwusers', false, function () {
   this.ServerClass =  "gamexamplewwusers" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV37UsersXPage=gx.fn.getIntegerValue("vUSERSXPAGE",'.') ;
      this.AV36CountUsers=gx.fn.getIntegerValue("vCOUNTUSERS",'.') ;
   };
   this.Validv_Filusergender=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILUSERGENDER");
         this.AnyError  = 0;
         if ( ! ( this.AV28FilUserGender == "N" || this.AV28FilUserGender == "F" || this.AV28FilUserGender == "M" || (""==this.AV28FilUserGender) ) )
         {
            try {
               gxballoon.setError("Campo FilUserGender fora do intervalo");
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
   this.e112212_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e192212_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e202212_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e212212_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e222212_client=function()
   {
      this.executeServerEvent("VBTNROLE.CLICK", true, arguments[0], false, false);
   };
   this.e232212_client=function()
   {
      this.executeServerEvent("VBTNSETPWD.CLICK", true, arguments[0], false, false);
   };
   this.e122212_client=function()
   {
      this.executeServerEvent("'SEARCH'", false, null, false, false);
   };
   this.e132212_client=function()
   {
      this.executeServerEvent("'FIRST'", true, null, false, false);
   };
   this.e142212_client=function()
   {
      this.executeServerEvent("'PREVIOUS'", true, null, false, false);
   };
   this.e152212_client=function()
   {
      this.executeServerEvent("'NEXT'", true, null, false, false);
   };
   this.e242212_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252212_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,11,14,16,19,21,24,26,29,31,40,48,49,50,51,52,53,54,55,56,60,63,66,69,74];
   this.GXLastCtrlId =74;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",47,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwusers",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addSingleLineEdit("Userid",48,"vUSERID","User Id","","UserId","char",0,"px",40,40,"left",null,[],"Userid","UserId",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",49,0,"px",17,"px","e202212_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btnrole","vBTNROLE",50,0,"px",17,"px","e222212_client","","Roles","Image","");
   GridwwContainer.addBitmap("&Btnsetpwd","vBTNSETPWD",51,0,"px",17,"px","e232212_client","","Password","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",52,0,"px",17,"px","e212212_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Authenticationtypename",53,"vAUTHENTICATIONTYPENAME","Authentication","","AuthenticationTypeName","char",0,"px",60,60,"left",null,[],"Authenticationtypename","AuthenticationTypeName",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",54,"vNAME","User Name","","Name","char",410,"px",120,80,"left","e192212_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Firstname",55,"vFIRSTNAME","First Name","","FirstName","char",150,"px",120,80,"left",null,[],"Firstname","FirstName",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Lastname",56,"vLASTNAME","Last Name","","LastName","char",150,"px",120,80,"left",null,[],"Lastname","LastName",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[6]={fld:"TBLFILTER",grid:0};
   GXValidFnc[9]={fld:"TBUSERNAME", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV24FilName",gxold:"OV24FilName",gxvar:"AV24FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilName=Value},v2z:function(Value){gx.O.ZV24FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV24FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[14]={fld:"TBFIRSTLASTNAME", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAMES",gxz:"ZV25FilNames",gxold:"OV25FilNames",gxvar:"AV25FilNames",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25FilNames=Value},v2z:function(Value){gx.O.ZV25FilNames=Value},v2c:function(){gx.fn.setControlValue("vFILNAMES",gx.O.AV25FilNames,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25FilNames=this.val()},val:function(){return gx.fn.getControlValue("vFILNAMES")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TBEMAIL", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILEMAIL",gxz:"ZV20FilEmail",gxold:"OV20FilEmail",gxvar:"AV20FilEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FilEmail=Value},v2z:function(Value){gx.O.ZV20FilEmail=Value},v2c:function(){gx.fn.setControlValue("vFILEMAIL",gx.O.AV20FilEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20FilEmail=this.val()},val:function(){return gx.fn.getControlValue("vFILEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TBGENDER", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filusergender,isvalid:null,rgrid:[],fld:"vFILUSERGENDER",gxz:"ZV28FilUserGender",gxold:"OV28FilUserGender",gxvar:"AV28FilUserGender",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28FilUserGender=Value},v2z:function(Value){gx.O.ZV28FilUserGender=Value},v2c:function(){gx.fn.setComboBoxValue("vFILUSERGENDER",gx.O.AV28FilUserGender);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28FilUserGender=this.val()},val:function(){return gx.fn.getControlValue("vFILUSERGENDER")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TBAUTHTYPE", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILAUTTYPE",gxz:"ZV19FilAutType",gxold:"OV19FilAutType",gxvar:"AV19FilAutType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19FilAutType=Value},v2z:function(Value){gx.O.ZV19FilAutType=Value},v2c:function(){gx.fn.setComboBoxValue("vFILAUTTYPE",gx.O.AV19FilAutType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19FilAutType=this.val()},val:function(){return gx.fn.getControlValue("vFILAUTTYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[40]={fld:"TBLGRID",grid:0};
   GXValidFnc[48]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSERID",gxz:"ZV35UserId",gxold:"OV35UserId",gxvar:"AV35UserId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35UserId=Value},v2z:function(Value){gx.O.ZV35UserId=Value},v2c:function(row){gx.fn.setGridControlValue("vUSERID",row || gx.fn.currentGridRowImpl(47),gx.O.AV35UserId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35UserId=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSERID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV14BtnUpd",gxold:"OV14BtnUpd",gxvar:"AV14BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14BtnUpd=Value},v2z:function(Value){gx.O.ZV14BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(47),gx.O.AV14BtnUpd,gx.O.AV43Btnupd_GXI)},c2v:function(){gx.O.AV43Btnupd_GXI=this.val_GXI();gx.O.AV14BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV43Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNROLE",gxz:"ZV12BtnRole",gxold:"OV12BtnRole",gxvar:"AV12BtnRole",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV12BtnRole=Value},v2z:function(Value){gx.O.ZV12BtnRole=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNROLE",row || gx.fn.currentGridRowImpl(47),gx.O.AV12BtnRole,gx.O.AV44Btnrole_GXI)},c2v:function(){gx.O.AV44Btnrole_GXI=this.val_GXI();gx.O.AV12BtnRole=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNROLE",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNROLE_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV44Btnrole_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNSETPWD",gxz:"ZV13BtnSetPwd",gxold:"OV13BtnSetPwd",gxvar:"AV13BtnSetPwd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13BtnSetPwd=Value},v2z:function(Value){gx.O.ZV13BtnSetPwd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNSETPWD",row || gx.fn.currentGridRowImpl(47),gx.O.AV13BtnSetPwd,gx.O.AV45Btnsetpwd_GXI)},c2v:function(){gx.O.AV45Btnsetpwd_GXI=this.val_GXI();gx.O.AV13BtnSetPwd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNSETPWD",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNSETPWD_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV45Btnsetpwd_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV9BtnDlt",gxold:"OV9BtnDlt",gxvar:"AV9BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9BtnDlt=Value},v2z:function(Value){gx.O.ZV9BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(47),gx.O.AV9BtnDlt,gx.O.AV46Btndlt_GXI)},c2v:function(){gx.O.AV46Btndlt_GXI=this.val_GXI();gx.O.AV9BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV46Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAUTHENTICATIONTYPENAME",gxz:"ZV6AuthenticationTypeName",gxold:"OV6AuthenticationTypeName",gxvar:"AV6AuthenticationTypeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV6AuthenticationTypeName=Value},v2z:function(Value){gx.O.ZV6AuthenticationTypeName=Value},v2c:function(row){gx.fn.setGridControlValue("vAUTHENTICATIONTYPENAME",row || gx.fn.currentGridRowImpl(47),gx.O.AV6AuthenticationTypeName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV6AuthenticationTypeName=this.val()},val:function(row){return gx.fn.getGridControlValue("vAUTHENTICATIONTYPENAME",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV31Name",gxold:"OV31Name",gxvar:"AV31Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31Name=Value},v2z:function(Value){gx.O.ZV31Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(47),gx.O.AV31Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFIRSTNAME",gxz:"ZV29FirstName",gxold:"OV29FirstName",gxvar:"AV29FirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29FirstName=Value},v2z:function(Value){gx.O.ZV29FirstName=Value},v2c:function(row){gx.fn.setGridControlValue("vFIRSTNAME",row || gx.fn.currentGridRowImpl(47),gx.O.AV29FirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29FirstName=this.val()},val:function(row){return gx.fn.getGridControlValue("vFIRSTNAME",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLASTNAME",gxz:"ZV30LastName",gxold:"OV30LastName",gxvar:"AV30LastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30LastName=Value},v2z:function(Value){gx.O.ZV30LastName=Value},v2c:function(row){gx.fn.setGridControlValue("vLASTNAME",row || gx.fn.currentGridRowImpl(47),gx.O.AV30LastName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30LastName=this.val()},val:function(row){return gx.fn.getGridControlValue("vLASTNAME",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE1",grid:0};
   GXValidFnc[63]={fld:"FIRST",grid:0};
   GXValidFnc[66]={fld:"PREVIOUS",grid:0};
   GXValidFnc[69]={fld:"NEXT",grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCURRENTPAGE",gxz:"ZV15CurrentPage",gxold:"OV15CurrentPage",gxvar:"AV15CurrentPage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CurrentPage=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CurrentPage=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCURRENTPAGE",gx.O.AV15CurrentPage,0)},c2v:function(){gx.O.AV15CurrentPage=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCURRENTPAGE",'.')},nac:gx.falseFn};
   this.AV24FilName = "" ;
   this.ZV24FilName = "" ;
   this.OV24FilName = "" ;
   this.AV25FilNames = "" ;
   this.ZV25FilNames = "" ;
   this.OV25FilNames = "" ;
   this.AV20FilEmail = "" ;
   this.ZV20FilEmail = "" ;
   this.OV20FilEmail = "" ;
   this.AV28FilUserGender = "" ;
   this.ZV28FilUserGender = "" ;
   this.OV28FilUserGender = "" ;
   this.AV19FilAutType = "" ;
   this.ZV19FilAutType = "" ;
   this.OV19FilAutType = "" ;
   this.ZV35UserId = "" ;
   this.OV35UserId = "" ;
   this.ZV14BtnUpd = "" ;
   this.OV14BtnUpd = "" ;
   this.ZV12BtnRole = "" ;
   this.OV12BtnRole = "" ;
   this.ZV13BtnSetPwd = "" ;
   this.OV13BtnSetPwd = "" ;
   this.ZV9BtnDlt = "" ;
   this.OV9BtnDlt = "" ;
   this.ZV6AuthenticationTypeName = "" ;
   this.OV6AuthenticationTypeName = "" ;
   this.ZV31Name = "" ;
   this.OV31Name = "" ;
   this.ZV29FirstName = "" ;
   this.OV29FirstName = "" ;
   this.ZV30LastName = "" ;
   this.OV30LastName = "" ;
   this.AV15CurrentPage = 0 ;
   this.ZV15CurrentPage = 0 ;
   this.OV15CurrentPage = 0 ;
   this.AV24FilName = "" ;
   this.AV25FilNames = "" ;
   this.AV20FilEmail = "" ;
   this.AV28FilUserGender = "" ;
   this.AV19FilAutType = "" ;
   this.AV15CurrentPage = 0 ;
   this.AV35UserId = "" ;
   this.AV14BtnUpd = "" ;
   this.AV12BtnRole = "" ;
   this.AV13BtnSetPwd = "" ;
   this.AV9BtnDlt = "" ;
   this.AV6AuthenticationTypeName = "" ;
   this.AV31Name = "" ;
   this.AV29FirstName = "" ;
   this.AV30LastName = "" ;
   this.AV37UsersXPage = 0 ;
   this.AV36CountUsers = 0 ;
   this.Events = {"e112212_client": ["'ADDNEW'", true] ,"e192212_client": ["VNAME.CLICK", true] ,"e202212_client": ["VBTNUPD.CLICK", true] ,"e212212_client": ["VBTNDLT.CLICK", true] ,"e222212_client": ["VBTNROLE.CLICK", true] ,"e232212_client": ["VBTNSETPWD.CLICK", true] ,"e122212_client": ["'SEARCH'", true] ,"e132212_client": ["'FIRST'", true] ,"e142212_client": ["'PREVIOUS'", true] ,"e152212_client": ["'NEXT'", true] ,"e242212_client": ["ENTER", true] ,"e252212_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'AV24FilName',fld:'vFILNAME'},{av:'AV25FilNames',fld:'vFILNAMES'},{av:'AV20FilEmail',fld:'vFILEMAIL'},{av:'AV28FilUserGender',fld:'vFILUSERGENDER'},{av:'AV19FilAutType',fld:'vFILAUTTYPE'},{av:'AV37UsersXPage',fld:'vUSERSXPAGE',hsh:true},{av:'AV15CurrentPage',fld:'vCURRENTPAGE'},{av:'AV36CountUsers',fld:'vCOUNTUSERS'}],[{av:'AV19FilAutType',fld:'vFILAUTTYPE'},{av:'AV40GXV1',fld:'vGXV1'}]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV24FilName',fld:'vFILNAME'},{av:'AV25FilNames',fld:'vFILNAMES'},{av:'AV20FilEmail',fld:'vFILEMAIL'},{av:'AV28FilUserGender',fld:'vFILUSERGENDER'},{av:'AV19FilAutType',fld:'vFILAUTTYPE'},{av:'AV37UsersXPage',fld:'vUSERSXPAGE',hsh:true},{av:'AV15CurrentPage',fld:'vCURRENTPAGE'},{av:'AV36CountUsers',fld:'vCOUNTUSERS'}],[{av:'AV42GXV3',fld:'vGXV3'},{av:'AV36CountUsers',fld:'vCOUNTUSERS'},{av:'AV14BtnUpd',fld:'vBTNUPD'},{av:'AV12BtnRole',fld:'vBTNROLE'},{av:'AV13BtnSetPwd',fld:'vBTNSETPWD'},{av:'AV9BtnDlt',fld:'vBTNDLT'},{av:'AV6AuthenticationTypeName',fld:'vAUTHENTICATIONTYPENAME'},{av:'AV35UserId',fld:'vUSERID'},{av:'AV31Name',fld:'vNAME'},{av:'AV29FirstName',fld:'vFIRSTNAME'},{av:'AV30LastName',fld:'vLASTNAME'},{av:'AV16Email',fld:'vEMAIL'},{av:'gx.fn.getCtrlProperty("vBTNUPD","Visible")',ctrl:'vBTNUPD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBTNROLE","Visible")',ctrl:'vBTNROLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBTNSETPWD","Visible")',ctrl:'vBTNSETPWD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBTNDLT","Visible")',ctrl:'vBTNDLT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NEXT","Visible")',ctrl:'NEXT',prop:'Visible'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'AV24FilName',fld:'vFILNAME'},{av:'AV25FilNames',fld:'vFILNAMES'},{av:'AV20FilEmail',fld:'vFILEMAIL'},{av:'AV28FilUserGender',fld:'vFILUSERGENDER'},{av:'AV19FilAutType',fld:'vFILAUTTYPE'},{av:'AV37UsersXPage',fld:'vUSERSXPAGE',hsh:true},{av:'AV15CurrentPage',fld:'vCURRENTPAGE'},{av:'AV36CountUsers',fld:'vCOUNTUSERS'}],[]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV35UserId',fld:'vUSERID'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'AV24FilName',fld:'vFILNAME'},{av:'AV25FilNames',fld:'vFILNAMES'},{av:'AV20FilEmail',fld:'vFILEMAIL'},{av:'AV28FilUserGender',fld:'vFILUSERGENDER'},{av:'AV19FilAutType',fld:'vFILAUTTYPE'},{av:'AV37UsersXPage',fld:'vUSERSXPAGE',hsh:true},{av:'AV15CurrentPage',fld:'vCURRENTPAGE'},{av:'AV36CountUsers',fld:'vCOUNTUSERS'},{av:'AV35UserId',fld:'vUSERID'}],[]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'AV24FilName',fld:'vFILNAME'},{av:'AV25FilNames',fld:'vFILNAMES'},{av:'AV20FilEmail',fld:'vFILEMAIL'},{av:'AV28FilUserGender',fld:'vFILUSERGENDER'},{av:'AV19FilAutType',fld:'vFILAUTTYPE'},{av:'AV37UsersXPage',fld:'vUSERSXPAGE',hsh:true},{av:'AV15CurrentPage',fld:'vCURRENTPAGE'},{av:'AV36CountUsers',fld:'vCOUNTUSERS'},{av:'AV35UserId',fld:'vUSERID'}],[]];
   this.EvtParms["VBTNROLE.CLICK"] = [[{av:'AV35UserId',fld:'vUSERID'}],[]];
   this.EvtParms["VBTNSETPWD.CLICK"] = [[{av:'AV35UserId',fld:'vUSERID'}],[]];
   this.EvtParms["'SEARCH'"] = [[],[{av:'AV15CurrentPage',fld:'vCURRENTPAGE'}]];
   this.EvtParms["'FIRST'"] = [[],[{av:'AV15CurrentPage',fld:'vCURRENTPAGE'}]];
   this.EvtParms["'PREVIOUS'"] = [[{av:'AV15CurrentPage',fld:'vCURRENTPAGE'}],[{av:'AV15CurrentPage',fld:'vCURRENTPAGE'}]];
   this.EvtParms["'NEXT'"] = [[{av:'AV15CurrentPage',fld:'vCURRENTPAGE'}],[{av:'AV15CurrentPage',fld:'vCURRENTPAGE'}]];
   this.setVCMap("AV37UsersXPage", "vUSERSXPAGE", 0, "int");
   this.setVCMap("AV36CountUsers", "vCOUNTUSERS", 0, "int");
   this.setVCMap("AV37UsersXPage", "vUSERSXPAGE", 0, "int");
   this.setVCMap("AV36CountUsers", "vCOUNTUSERS", 0, "int");
   GridwwContainer.addRefreshingVar(this.GXValidFnc[11]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridwwContainer.addRefreshingVar({rfrVar:"AV37UsersXPage"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridwwContainer.addRefreshingVar({rfrVar:"AV36CountUsers"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwusers());
