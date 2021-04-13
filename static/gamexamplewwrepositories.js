/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:28:1.46
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwrepositories', false, function () {
   this.ServerClass =  "gamexamplewwrepositories" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.s112_client=function()
   {
      this.AV24GXV2 = gx.num.trunc( 1 ,0) ;
      while ( this.AV24GXV2 <= this.AV8Errors.length )
      {
         this.AV7Error =  this.AV8Errors[this.AV24GXV2 - 1]  ;
         this.addMessage(gx.text.format( "%1 (GAM%2)", this.AV7Error.Message, this.AV7Error.Code, "", "", "", "", "", "", ""));
         this.AV24GXV2 = gx.num.trunc( this.AV24GXV2 + 1 ,0) ;
      }
   };
   this.e112272_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e132272_client=function()
   {
      this.executeServerEvent("VID.CLICK", true, arguments[0], false, false);
   };
   this.e142272_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e152272_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e162272_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e172272_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[4,7,10,12,15,17,26,33,34,35,36];
   this.GXLastCtrlId =36;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",32,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwrepositories",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",33,0,"px",17,"px","e142272_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",34,0,"px",17,"px","e152272_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Id",35,"vID","Id","","Id","int",0,"px",12,12,"right","e132272_client",[],"Id","Id",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addSingleLineEdit("Name",36,"vNAME","Name","","Name","char",450,"px",254,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridwwContainer);
   GXValidFnc[4]={fld:"TBLPAGE",grid:0};
   GXValidFnc[7]={fld:"TBLFILTER",grid:0};
   GXValidFnc[10]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV9FilName",gxold:"OV9FilName",gxvar:"AV9FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9FilName=Value},v2z:function(Value){gx.O.ZV9FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV9FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 12 , function() {
   });
   GXValidFnc[15]={fld:"TBNAMESPACE", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAMESPACE",gxz:"ZV10FilNameSpace",gxold:"OV10FilNameSpace",gxvar:"AV10FilNameSpace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10FilNameSpace=Value},v2z:function(Value){gx.O.ZV10FilNameSpace=Value},v2c:function(){gx.fn.setControlValue("vFILNAMESPACE",gx.O.AV10FilNameSpace,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10FilNameSpace=this.val()},val:function(){return gx.fn.getControlValue("vFILNAMESPACE")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[26]={fld:"TBLGRID",grid:0};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV6BtnUpd",gxold:"OV6BtnUpd",gxvar:"AV6BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BtnUpd=Value},v2z:function(Value){gx.O.ZV6BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(32),gx.O.AV6BtnUpd,gx.O.AV22Btnupd_GXI)},c2v:function(){gx.O.AV22Btnupd_GXI=this.val_GXI();gx.O.AV6BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV22Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV5BtnDlt",gxold:"OV5BtnDlt",gxvar:"AV5BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5BtnDlt=Value},v2z:function(Value){gx.O.ZV5BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(32),gx.O.AV5BtnDlt,gx.O.AV23Btndlt_GXI)},c2v:function(){gx.O.AV23Btndlt_GXI=this.val_GXI();gx.O.AV5BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV23Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:32,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vID",gxz:"ZV13Id",gxold:"OV13Id",gxvar:"AV13Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(32),gx.O.AV13Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(32),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV14Name",gxold:"OV14Name",gxvar:"AV14Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14Name=Value},v2z:function(Value){gx.O.ZV14Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(32),gx.O.AV14Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   this.AV9FilName = "" ;
   this.ZV9FilName = "" ;
   this.OV9FilName = "" ;
   this.AV10FilNameSpace = "" ;
   this.ZV10FilNameSpace = "" ;
   this.OV10FilNameSpace = "" ;
   this.ZV6BtnUpd = "" ;
   this.OV6BtnUpd = "" ;
   this.ZV5BtnDlt = "" ;
   this.OV5BtnDlt = "" ;
   this.ZV13Id = 0 ;
   this.OV13Id = 0 ;
   this.ZV14Name = "" ;
   this.OV14Name = "" ;
   this.AV9FilName = "" ;
   this.AV10FilNameSpace = "" ;
   this.AV6BtnUpd = "" ;
   this.AV5BtnDlt = "" ;
   this.AV13Id = 0 ;
   this.AV14Name = "" ;
   this.AV7Error = {} ;
   this.AV8Errors = [ ] ;
   this.AV24GXV2 = 0 ;
   this.Events = {"e112272_client": ["'ADDNEW'", true] ,"e132272_client": ["VID.CLICK", true] ,"e142272_client": ["VBTNUPD.CLICK", true] ,"e152272_client": ["VBTNDLT.CLICK", true] ,"e162272_client": ["ENTER", true] ,"e172272_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'}],[{av:'AV21GXV1',fld:'vGXV1'},{av:'AV6BtnUpd',fld:'vBTNUPD'},{av:'AV5BtnDlt',fld:'vBTNDLT'},{av:'AV18IsAdmin',fld:'vISADMIN'},{av:'gx.fn.getCtrlProperty("vBTNDLT","Visible")',ctrl:'vBTNDLT',prop:'Visible'},{av:'AV13Id',fld:'vID'},{av:'AV14Name',fld:'vNAME'},{av:'AV24GXV2',fld:'vGXV2'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'}],[]];
   this.EvtParms["VID.CLICK"] = [[{av:'AV13Id',fld:'vID'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'},{av:'AV13Id',fld:'vID'}],[]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'},{av:'AV13Id',fld:'vID'}],[]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV9FilName',fld:'vFILNAME'},{av:'AV10FilNameSpace',fld:'vFILNAMESPACE'}],[]];
   GridwwContainer.addRefreshingVar(this.GXValidFnc[12]);
   GridwwContainer.addRefreshingVar(this.GXValidFnc[17]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwrepositories());
