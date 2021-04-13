/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:27:38.24
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwuserrole', false, function () {
   this.ServerClass =  "gamexamplewwuserrole" ;
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
      this.AV23UserId=gx.fn.getControlValue("vUSERID") ;
      this.AV12Exists=gx.fn.getControlValue("vEXISTS") ;
   };
   this.s122_client=function()
   {
      this.AV12Exists =  false  ;
      this.AV38GXV8 = gx.num.trunc( 1 ,0) ;
      while ( this.AV38GXV8 <= this.AV26UserRoles.length )
      {
         this.AV20Role =  this.AV26UserRoles[this.AV38GXV8 - 1]  ;
         this.s112_client();
         if ( this.AV20Role.Id == this.AV13GAMRole.Id )
         {
            this.AV12Exists =  true  ;
            break;
         }
         this.AV38GXV8 = gx.num.trunc( this.AV38GXV8 + 1 ,0) ;
      }
   };
   this.s112_client=function()
   {
      if ( this.AV11Errors.length > 0 )
      {
         this.AV39GXV9 = gx.num.trunc( 1 ,0) ;
         while ( this.AV39GXV9 <= this.AV11Errors.length )
         {
            this.AV10Error =  this.AV11Errors[this.AV39GXV9 - 1]  ;
            this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV10Error.Message, this.AV10Error.Code, "", "", "", "", "", "", ""));
            this.AV39GXV9 = gx.num.trunc( this.AV39GXV9 + 1 ,0) ;
         }
      }
   };
   this.e162231_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e112232_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e142232_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e152232_client=function()
   {
      this.executeServerEvent("VBTNMAINROLE.CLICK", true, arguments[0], false, false);
   };
   this.e172232_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e182232_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,11,13,19,21,29,31,37,38,39,40,41];
   this.GXLastCtrlId =41;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",36,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwuserrole",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addSingleLineEdit("Id",37,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Guid",38,"vGUID","GUID","","GUID","char",0,"px",40,40,"left",null,[],"Guid","GUID",false,0,false,false,"Attribute",1,"");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",39,0,"px",17,"px","e142232_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Btnmainrole",40,"vBTNMAINROLE","Main","","BtnMainRole","char",60,"px",10,10,"left","e152232_client",[],"Btnmainrole","BtnMainRole",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",41,"vNAME","Role","","Name","char",350,"px",120,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBLPAGE",grid:0};
   GXValidFnc[5]={fld:"TBLADD",grid:0};
   GXValidFnc[11]={fld:"TBUSERLOGIN", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV25UserName",gxold:"OV25UserName",gxvar:"AV25UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25UserName=Value},v2z:function(Value){gx.O.ZV25UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV25UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[19]={fld:"TBDSPINHROLES", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDISPLAYINHERITROLES",gxz:"ZV9DisplayInheritRoles",gxold:"OV9DisplayInheritRoles",gxvar:"AV9DisplayInheritRoles",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV9DisplayInheritRoles=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV9DisplayInheritRoles=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vDISPLAYINHERITROLES",gx.O.AV9DisplayInheritRoles,true)},c2v:function(){gx.O.AV9DisplayInheritRoles=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vDISPLAYINHERITROLES")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[29]={fld:"TBADD", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vROLESID",gxz:"ZV22RolesId",gxold:"OV22RolesId",gxvar:"AV22RolesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22RolesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22RolesId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vROLESID",gx.O.AV22RolesId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22RolesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vROLESID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[37]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:36,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV16Id",gxold:"OV16Id",gxvar:"AV16Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(36),gx.O.AV16Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:36,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGUID",gxz:"ZV15GUID",gxold:"OV15GUID",gxvar:"AV15GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15GUID=Value},v2z:function(Value){gx.O.ZV15GUID=Value},v2c:function(row){gx.fn.setGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(36),gx.O.AV15GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15GUID=this.val()},val:function(row){return gx.fn.getGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV7BtnDlt",gxold:"OV7BtnDlt",gxvar:"AV7BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BtnDlt=Value},v2z:function(Value){gx.O.ZV7BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(36),gx.O.AV7BtnDlt,gx.O.AV34Btndlt_GXI)},c2v:function(){gx.O.AV34Btndlt_GXI=this.val_GXI();gx.O.AV7BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV34Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:36,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNMAINROLE",gxz:"ZV8BtnMainRole",gxold:"OV8BtnMainRole",gxvar:"AV8BtnMainRole",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV8BtnMainRole=Value},v2z:function(Value){gx.O.ZV8BtnMainRole=Value},v2c:function(row){gx.fn.setGridControlValue("vBTNMAINROLE",row || gx.fn.currentGridRowImpl(36),gx.O.AV8BtnMainRole,0)},c2v:function(){gx.O.AV8BtnMainRole=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNMAINROLE",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:36,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV18Name",gxold:"OV18Name",gxvar:"AV18Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18Name=Value},v2z:function(Value){gx.O.ZV18Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(36),gx.O.AV18Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   this.AV25UserName = "" ;
   this.ZV25UserName = "" ;
   this.OV25UserName = "" ;
   this.AV9DisplayInheritRoles = false ;
   this.ZV9DisplayInheritRoles = false ;
   this.OV9DisplayInheritRoles = false ;
   this.AV22RolesId = 0 ;
   this.ZV22RolesId = 0 ;
   this.OV22RolesId = 0 ;
   this.ZV16Id = 0 ;
   this.OV16Id = 0 ;
   this.ZV15GUID = "" ;
   this.OV15GUID = "" ;
   this.ZV7BtnDlt = "" ;
   this.OV7BtnDlt = "" ;
   this.ZV8BtnMainRole = "" ;
   this.OV8BtnMainRole = "" ;
   this.ZV18Name = "" ;
   this.OV18Name = "" ;
   this.AV25UserName = "" ;
   this.AV9DisplayInheritRoles = false ;
   this.AV22RolesId = 0 ;
   this.AV23UserId = "" ;
   this.AV16Id = 0 ;
   this.AV15GUID = "" ;
   this.AV7BtnDlt = "" ;
   this.AV8BtnMainRole = "" ;
   this.AV18Name = "" ;
   this.AV12Exists = false ;
   this.AV13GAMRole = {} ;
   this.AV20Role = {} ;
   this.AV11Errors = [ ] ;
   this.AV39GXV9 = 0 ;
   this.AV10Error = {} ;
   this.AV26UserRoles = [ ] ;
   this.AV38GXV8 = 0 ;
   this.Events = {"e112232_client": ["'ADDNEW'", true] ,"e142232_client": ["VBTNDLT.CLICK", true] ,"e152232_client": ["VBTNMAINROLE.CLICK", true] ,"e172232_client": ["ENTER", true] ,"e182232_client": ["CANCEL", true] ,"e162231_client": ["'SEARCH'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9DisplayInheritRoles',fld:'vDISPLAYINHERITROLES'},{av:'AV23UserId',fld:'vUSERID'},{av:'AV12Exists',fld:'vEXISTS'}],[{av:'AV25UserName',fld:'vUSERNAME'},{av:'AV22RolesId',fld:'vROLESID'},{av:'AV31GXV2',fld:'vGXV2'},{av:'gx.fn.getCtrlProperty("TBADD","Visible")',ctrl:'TBADD',prop:'Visible'},{ctrl:'BTNADD',prop:'Visible'},{ctrl:'vROLESID'},{av:'AV12Exists',fld:'vEXISTS'},{av:'AV38GXV8',fld:'vGXV8'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV9DisplayInheritRoles',fld:'vDISPLAYINHERITROLES'}],[{av:'AV33GXV4',fld:'vGXV4'},{av:'AV7BtnDlt',fld:'vBTNDLT'},{av:'gx.fn.getCtrlProperty("vBTNDLT","Visible")',ctrl:'vBTNDLT',prop:'Visible'},{av:'AV8BtnMainRole',fld:'vBTNMAINROLE'},{av:'AV15GUID',fld:'vGUID'},{av:'AV16Id',fld:'vID'},{av:'AV18Name',fld:'vNAME'},{av:'AV36GXV6',fld:'vGXV6'},{av:'AV17isDirectRole',fld:'vISDIRECTROLE'},{av:'AV37GXV7',fld:'vGXV7'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'AV22RolesId',fld:'vROLESID'},{av:'AV23UserId',fld:'vUSERID'}],[{av:'AV6isOK',fld:'vISOK'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'AV23UserId',fld:'vUSERID'},{av:'AV16Id',fld:'vID'}],[{av:'AV6isOK',fld:'vISOK'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.EvtParms["VBTNMAINROLE.CLICK"] = [[{av:'AV23UserId',fld:'vUSERID'},{av:'AV16Id',fld:'vID'}],[{av:'AV6isOK',fld:'vISOK'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.EvtParms["'SEARCH'"] = [[],[]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9DisplayInheritRoles',fld:'vDISPLAYINHERITROLES'},{av:'AV23UserId',fld:'vUSERID'},{av:'AV12Exists',fld:'vEXISTS'}],[{av:'AV25UserName',fld:'vUSERNAME'},{av:'AV22RolesId',fld:'vROLESID'},{av:'AV31GXV2',fld:'vGXV2'},{av:'gx.fn.getCtrlProperty("TBADD","Visible")',ctrl:'TBADD',prop:'Visible'},{ctrl:'BTNADD',prop:'Visible'},{ctrl:'vROLESID'},{av:'AV12Exists',fld:'vEXISTS'},{av:'AV38GXV8',fld:'vGXV8'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9DisplayInheritRoles',fld:'vDISPLAYINHERITROLES'},{av:'AV23UserId',fld:'vUSERID'},{av:'AV12Exists',fld:'vEXISTS'}],[{av:'AV25UserName',fld:'vUSERNAME'},{av:'AV22RolesId',fld:'vROLESID'},{av:'AV31GXV2',fld:'vGXV2'},{av:'gx.fn.getCtrlProperty("TBADD","Visible")',ctrl:'TBADD',prop:'Visible'},{ctrl:'BTNADD',prop:'Visible'},{ctrl:'vROLESID'},{av:'AV12Exists',fld:'vEXISTS'},{av:'AV38GXV8',fld:'vGXV8'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9DisplayInheritRoles',fld:'vDISPLAYINHERITROLES'},{av:'AV23UserId',fld:'vUSERID'},{av:'AV12Exists',fld:'vEXISTS'}],[{av:'AV25UserName',fld:'vUSERNAME'},{av:'AV22RolesId',fld:'vROLESID'},{av:'AV31GXV2',fld:'vGXV2'},{av:'gx.fn.getCtrlProperty("TBADD","Visible")',ctrl:'TBADD',prop:'Visible'},{ctrl:'BTNADD',prop:'Visible'},{ctrl:'vROLESID'},{av:'AV12Exists',fld:'vEXISTS'},{av:'AV38GXV8',fld:'vGXV8'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9DisplayInheritRoles',fld:'vDISPLAYINHERITROLES'},{av:'AV23UserId',fld:'vUSERID'},{av:'AV12Exists',fld:'vEXISTS'}],[{av:'AV25UserName',fld:'vUSERNAME'},{av:'AV22RolesId',fld:'vROLESID'},{av:'AV31GXV2',fld:'vGXV2'},{av:'gx.fn.getCtrlProperty("TBADD","Visible")',ctrl:'TBADD',prop:'Visible'},{ctrl:'BTNADD',prop:'Visible'},{ctrl:'vROLESID'},{av:'AV12Exists',fld:'vEXISTS'},{av:'AV38GXV8',fld:'vGXV8'},{av:'AV39GXV9',fld:'vGXV9'}]];
   this.setVCMap("AV23UserId", "vUSERID", 0, "char");
   this.setVCMap("AV12Exists", "vEXISTS", 0, "boolean");
   this.setVCMap("AV23UserId", "vUSERID", 0, "char");
   this.setVCMap("AV12Exists", "vEXISTS", 0, "boolean");
   GridwwContainer.addRefreshingVar({rfrVar:"AV23UserId"});
   GridwwContainer.addRefreshingVar({rfrVar:"AV12Exists"});
   GridwwContainer.addRefreshingVar(this.GXValidFnc[21]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwuserrole());
