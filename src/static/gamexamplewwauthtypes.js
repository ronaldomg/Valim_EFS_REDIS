/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:28:52.59
*/
gx.evt.autoSkip = false;
gx.define('gamexamplewwauthtypes', false, function () {
   this.ServerClass =  "gamexamplewwauthtypes" ;
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
   this.Validv_Typeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTYPEID");
         this.AnyError  = 0;
         if ( ! ( this.AV18TypeId == "Custom" || this.AV18TypeId == "ExternalWebService" || this.AV18TypeId == "Facebook" || this.AV18TypeId == "GAMLocal" || this.AV18TypeId == "GAMRemote" || this.AV18TypeId == "Google" || this.AV18TypeId == "Twitter" ) )
         {
            try {
               gxballoon.setError("Campo TypeId fora do intervalo");
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
   this.e1122a2_client=function()
   {
      this.executeServerEvent("'ADDNEW'", false, null, false, false);
   };
   this.e1322a2_client=function()
   {
      this.executeServerEvent("VNAME.CLICK", true, arguments[0], false, false);
   };
   this.e1422a2_client=function()
   {
      this.executeServerEvent("VBTNUPD.CLICK", true, arguments[0], false, false);
   };
   this.e1522a2_client=function()
   {
      this.executeServerEvent("VBTNTESTWS.CLICK", true, arguments[0], false, false);
   };
   this.e1622a2_client=function()
   {
      this.executeServerEvent("VBTNDLT.CLICK", true, arguments[0], false, false);
   };
   this.e1722a2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1822a2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,6,9,11,23,30,31,32,33,34];
   this.GXLastCtrlId =34;
   this.GridwwContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gamexamplewwauthtypes",[],false,1,false,true,15,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridwwContainer = this.GridwwContainer;
   GridwwContainer.addBitmap("&Btnupd","vBTNUPD",30,0,"px",17,"px","e1422a2_client","","Update","Image","");
   GridwwContainer.addBitmap("&Btntestws","vBTNTESTWS",31,0,"px",17,"px","e1522a2_client","","Test","Image","");
   GridwwContainer.addBitmap("&Btndlt","vBTNDLT",32,0,"px",17,"px","e1622a2_client","","Delete","Image","");
   GridwwContainer.addSingleLineEdit("Name",33,"vNAME","Name","","Name","char",250,"px",60,60,"left","e1322a2_client",[],"Name","Name",true,0,false,false,"Attribute",1,"");
   GridwwContainer.addComboBox("Typeid",34,"vTYPEID","Type Id","TypeId","char",null,0,true,false,200,"px","");
   this.setGrid(GridwwContainer);
   GXValidFnc[2]={fld:"TBFORMTITLE", format:0,grid:0};
   GXValidFnc[3]={fld:"TBLPAGE",grid:0};
   GXValidFnc[6]={fld:"TBLFILTER",grid:0};
   GXValidFnc[9]={fld:"TBNAME", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILNAME",gxz:"ZV11FilName",gxold:"OV11FilName",gxvar:"AV11FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11FilName=Value},v2z:function(Value){gx.O.ZV11FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV11FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV11FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[23]={fld:"TBLGRID",grid:0};
   GXValidFnc[30]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV8BtnUpd",gxold:"OV8BtnUpd",gxvar:"AV8BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8BtnUpd=Value},v2z:function(Value){gx.O.ZV8BtnUpd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNUPD",row || gx.fn.currentGridRowImpl(29),gx.O.AV8BtnUpd,gx.O.AV25Btnupd_GXI)},c2v:function(){gx.O.AV25Btnupd_GXI=this.val_GXI();gx.O.AV8BtnUpd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNUPD",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNUPD_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV25Btnupd_GXI',nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNTESTWS",gxz:"ZV7BtnTestWS",gxold:"OV7BtnTestWS",gxvar:"AV7BtnTestWS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BtnTestWS=Value},v2z:function(Value){gx.O.ZV7BtnTestWS=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNTESTWS",row || gx.fn.currentGridRowImpl(29),gx.O.AV7BtnTestWS,gx.O.AV22Btntestws_GXI)},c2v:function(){gx.O.AV22Btntestws_GXI=this.val_GXI();gx.O.AV7BtnTestWS=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNTESTWS",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNTESTWS_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV22Btntestws_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV6BtnDlt",gxold:"OV6BtnDlt",gxvar:"AV6BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BtnDlt=Value},v2z:function(Value){gx.O.ZV6BtnDlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBTNDLT",row || gx.fn.currentGridRowImpl(29),gx.O.AV6BtnDlt,gx.O.AV26Btndlt_GXI)},c2v:function(){gx.O.AV26Btndlt_GXI=this.val_GXI();gx.O.AV6BtnDlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNDLT",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBTNDLT_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV26Btndlt_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNAME",gxz:"ZV16Name",gxold:"OV16Name",gxvar:"AV16Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16Name=Value},v2z:function(Value){gx.O.ZV16Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(29),gx.O.AV16Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV16Name=this.val()},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:0,isacc:0,grid:29,gxgrid:this.GridwwContainer,fnc:this.Validv_Typeid,isvalid:null,rgrid:[],fld:"vTYPEID",gxz:"ZV18TypeId",gxold:"OV18TypeId",gxvar:"AV18TypeId",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV18TypeId=Value},v2z:function(Value){gx.O.ZV18TypeId=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vTYPEID",row || gx.fn.currentGridRowImpl(29),gx.O.AV18TypeId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV18TypeId=this.val()},val:function(row){return gx.fn.getGridControlValue("vTYPEID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   this.AV11FilName = "" ;
   this.ZV11FilName = "" ;
   this.OV11FilName = "" ;
   this.ZV8BtnUpd = "" ;
   this.OV8BtnUpd = "" ;
   this.ZV7BtnTestWS = "" ;
   this.OV7BtnTestWS = "" ;
   this.ZV6BtnDlt = "" ;
   this.OV6BtnDlt = "" ;
   this.ZV16Name = "" ;
   this.OV16Name = "" ;
   this.ZV18TypeId = "" ;
   this.OV18TypeId = "" ;
   this.AV11FilName = "" ;
   this.AV8BtnUpd = "" ;
   this.AV7BtnTestWS = "" ;
   this.AV6BtnDlt = "" ;
   this.AV16Name = "" ;
   this.AV18TypeId = "" ;
   this.Events = {"e1122a2_client": ["'ADDNEW'", true] ,"e1322a2_client": ["VNAME.CLICK", true] ,"e1422a2_client": ["VBTNUPD.CLICK", true] ,"e1522a2_client": ["VBTNTESTWS.CLICK", true] ,"e1622a2_client": ["VBTNDLT.CLICK", true] ,"e1722a2_client": ["ENTER", true] ,"e1822a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW.LOAD"] = [[{av:'AV11FilName',fld:'vFILNAME'}],[{av:'AV7BtnTestWS',fld:'vBTNTESTWS'},{av:'AV24GXV2',fld:'vGXV2'},{av:'AV8BtnUpd',fld:'vBTNUPD'},{av:'AV6BtnDlt',fld:'vBTNDLT'},{av:'AV16Name',fld:'vNAME'},{av:'AV18TypeId',fld:'vTYPEID'},{av:'gx.fn.getCtrlProperty("vBTNTESTWS","Visible")',ctrl:'vBTNTESTWS',prop:'Visible'}]];
   this.EvtParms["'ADDNEW'"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV16Name',fld:'vNAME'},{av:'AV18TypeId',fld:'vTYPEID'}],[]];
   this.EvtParms["VBTNUPD.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV16Name',fld:'vNAME'},{av:'AV18TypeId',fld:'vTYPEID'}],[]];
   this.EvtParms["VBTNTESTWS.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV16Name',fld:'vNAME'},{av:'AV18TypeId',fld:'vTYPEID'}],[]];
   this.EvtParms["VBTNDLT.CLICK"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'},{av:'AV16Name',fld:'vNAME'},{av:'AV18TypeId',fld:'vTYPEID'}],[]];
   this.EvtParms["GRIDWW_FIRSTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_PREVPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_NEXTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'}],[]];
   this.EvtParms["GRIDWW_LASTPAGE"] = [[{av:'GRIDWW_nFirstRecordOnPage'},{av:'GRIDWW_nEOF'},{av:'subGridww_Rows'},{av:'AV11FilName',fld:'vFILNAME'}],[]];
   GridwwContainer.addRefreshingVar(this.GXValidFnc[11]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gamexamplewwauthtypes());
