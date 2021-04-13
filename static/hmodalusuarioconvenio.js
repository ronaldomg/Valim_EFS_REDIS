/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:24:59.40
*/
gx.evt.autoSkip = false;
gx.define('hmodalusuarioconvenio', false, function () {
   this.ServerClass =  "hmodalusuarioconvenio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
      this.AV33ConvenioVencimentoParm=gx.fn.getDateValue("vCONVENIOVENCIMENTOPARM") ;
   };
   this.Validv_Convenioidparm=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOIDPARM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1121m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1421m2_client=function()
   {
      this.executeServerEvent("VUSUARIOID.ISVALID", true, arguments[0], false, false);
   };
   this.e1621m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,16,18,19,20,21,22,23];
   this.GXLastCtrlId =23;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalusuarioconvenio",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Usuarioexc",18,"vUSUARIOEXC","Exc","","UsuarioExc","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit("Usuarioid",19,"vUSUARIOID","Código","","UsuarioId","char",0,"px",12,12,"left",null,[],"Usuarioid","UsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcons","vBMPCONS",20,0,"px",17,"px",null,"","","Image","");
   GridContainer.addSingleLineEdit("Usuarionome",21,"vUSUARIONOME","Nome","","UsuarioNome","svchar",250,"px",35,35,"left",null,[],"Usuarionome","UsuarioNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Usuarioemail",22,"vUSUARIOEMAIL","Email","","UsuarioEmail","svchar",250,"px",60,60,"left",null,[],"Usuarioemail","UsuarioEmail",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenioidparm,isvalid:null,rgrid:[],fld:"vCONVENIOIDPARM",gxz:"ZV10ConvenioIdParm",gxold:"OV10ConvenioIdParm",gxvar:"AV10ConvenioIdParm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ConvenioIdParm=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10ConvenioIdParm=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOIDPARM",gx.O.AV10ConvenioIdParm,0)},c2v:function(){gx.O.AV10ConvenioIdParm=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOIDPARM",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV9ConvenioDescricao",gxold:"OV9ConvenioDescricao",gxvar:"AV9ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV9ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV9ConvenioDescricao,0)},c2v:function(){gx.O.AV9ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[18]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOEXC",gxz:"ZV29UsuarioExc",gxold:"OV29UsuarioExc",gxvar:"AV29UsuarioExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.AV29UsuarioExc=Value},v2z:function(Value){gx.O.ZV29UsuarioExc=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("vUSUARIOEXC",row || gx.fn.currentGridRowImpl(17),gx.O.AV29UsuarioExc,"S")},c2v:function(){gx.O.AV29UsuarioExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIOEXC",row || gx.fn.currentGridRowImpl(17))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[19]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Validv_Usuarioid,isvalid:'e1421m2_client',rgrid:[],fld:"vUSUARIOID",gxz:"ZV24UsuarioId",gxold:"OV24UsuarioId",gxvar:"AV24UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV24UsuarioId=Value},v2z:function(Value){gx.O.ZV24UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIOID",row || gx.fn.currentGridRowImpl(17),gx.O.AV24UsuarioId,0)},c2v:function(){gx.O.AV24UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIOID",row || gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONS",gxz:"ZV6BmpCons",gxold:"OV6BmpCons",gxvar:"AV6BmpCons",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BmpCons=Value},v2z:function(Value){gx.O.ZV6BmpCons=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONS",row || gx.fn.currentGridRowImpl(17),gx.O.AV6BmpCons,gx.O.AV38Bmpcons_GXI)},c2v:function(){gx.O.AV38Bmpcons_GXI=this.val_GXI();gx.O.AV6BmpCons=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONS",row || gx.fn.currentGridRowImpl(17))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONS_GXI",row || gx.fn.currentGridRowImpl(17))}, gxvar_GXI:'AV38Bmpcons_GXI',nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV26UsuarioNome",gxold:"OV26UsuarioNome",gxvar:"AV26UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV26UsuarioNome=Value},v2z:function(Value){gx.O.ZV26UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(17),gx.O.AV26UsuarioNome,0)},c2v:function(){gx.O.AV26UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIONOME",row || gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOEMAIL",gxz:"ZV32UsuarioEmail",gxold:"OV32UsuarioEmail",gxvar:"AV32UsuarioEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32UsuarioEmail=Value},v2z:function(Value){gx.O.ZV32UsuarioEmail=Value},v2c:function(row){gx.fn.setGridControlValue("vUSUARIOEMAIL",row || gx.fn.currentGridRowImpl(17),gx.O.AV32UsuarioEmail,0)},c2v:function(){gx.O.AV32UsuarioEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("vUSUARIOEMAIL",row || gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};
   GXValidFnc[23]={fld:"DIV2", format:2,grid:0};
   this.AV10ConvenioIdParm = 0 ;
   this.ZV10ConvenioIdParm = 0 ;
   this.OV10ConvenioIdParm = 0 ;
   this.AV9ConvenioDescricao = "" ;
   this.ZV9ConvenioDescricao = "" ;
   this.OV9ConvenioDescricao = "" ;
   this.ZV29UsuarioExc = "" ;
   this.OV29UsuarioExc = "" ;
   this.ZV24UsuarioId = "" ;
   this.OV24UsuarioId = "" ;
   this.ZV6BmpCons = "" ;
   this.OV6BmpCons = "" ;
   this.ZV26UsuarioNome = "" ;
   this.OV26UsuarioNome = "" ;
   this.ZV32UsuarioEmail = "" ;
   this.OV32UsuarioEmail = "" ;
   this.AV10ConvenioIdParm = 0 ;
   this.AV9ConvenioDescricao = "" ;
   this.AV33ConvenioVencimentoParm = gx.date.nullDate() ;
   this.AV29UsuarioExc = "" ;
   this.AV24UsuarioId = "" ;
   this.AV6BmpCons = "" ;
   this.AV26UsuarioNome = "" ;
   this.AV32UsuarioEmail = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A615UsuarioEmail = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2477ConvenioUsuarioUsuarioAlt = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e1121m2_client": ["ENTER", true] ,"e1421m2_client": ["VUSUARIOID.ISVALID", true] ,"e1621m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6BmpCons',fld:'vBMPCONS',grid:17},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV24UsuarioId',fld:'vUSUARIOID',grid:17},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL',grid:17},{av:'AV29UsuarioExc',fld:'vUSUARIOEXC',grid:17},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'gx.fn.getCtrlProperty("vUSUARIOEXC","Visible")',ctrl:'vUSUARIOEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSUARIOID","Enabled")',ctrl:'vUSUARIOID',prop:'Enabled'},{av:'AV7Cont',fld:'vCONT'},{av:'AV25UsuarioIdVet',fld:'vUSUARIOIDVET'},{av:'AV31UsuarioEmailVet',fld:'vUSUARIOEMAILVET'},{av:'AV30UsuarioExcVet',fld:'vUSUARIOEXCVET'},{av:'AV27UsuarioNomeVet',fld:'vUSUARIONOMEVET'}]];
   this.EvtParms["ENTER"] = [[{av:'AV24UsuarioId',fld:'vUSUARIOID',grid:17},{av:'AV29UsuarioExc',fld:'vUSUARIOEXC',grid:17},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'},{av:'AV33ConvenioVencimentoParm',fld:'vCONVENIOVENCIMENTOPARM',hsh:true},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV10ConvenioIdParm',fld:'vCONVENIOIDPARM',hsh:true},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL',grid:17},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV19SnErro',fld:'vSNERRO'},{av:'AV41GXLvl61',fld:'vGXLVL61'},{av:'AV11emBranco',fld:'vEMBRANCO'},{av:'AV24UsuarioId',fld:'vUSUARIOID'},{av:'AV10ConvenioIdParm',fld:'vCONVENIOIDPARM',hsh:true},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7Cont',fld:'vCONT'},{av:'AV25UsuarioIdVet',fld:'vUSUARIOIDVET'},{av:'AV31UsuarioEmailVet',fld:'vUSUARIOEMAILVET'},{av:'AV30UsuarioExcVet',fld:'vUSUARIOEXCVET'},{av:'AV27UsuarioNomeVet',fld:'vUSUARIONOMEVET'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV25UsuarioIdVet',fld:'vUSUARIOIDVET'},{av:'AV27UsuarioNomeVet',fld:'vUSUARIONOMEVET'},{av:'AV31UsuarioEmailVet',fld:'vUSUARIOEMAILVET'},{av:'AV30UsuarioExcVet',fld:'vUSUARIOEXCVET'}],[{av:'AV28x',fld:'vX'},{av:'AV24UsuarioId',fld:'vUSUARIOID'},{av:'AV26UsuarioNome',fld:'vUSUARIONOME'},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL'},{av:'AV29UsuarioExc',fld:'vUSUARIOEXC'}]];
   this.EvtParms["VUSUARIOID.ISVALID"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV24UsuarioId',fld:'vUSUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A615UsuarioEmail',fld:'USUARIOEMAIL'}],[{av:'AV26UsuarioNome',fld:'vUSUARIONOME'},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6BmpCons',fld:'vBMPCONS',grid:17},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV24UsuarioId',fld:'vUSUARIOID',grid:17},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL',grid:17},{av:'AV29UsuarioExc',fld:'vUSUARIOEXC',grid:17},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'gx.fn.getCtrlProperty("vUSUARIOEXC","Visible")',ctrl:'vUSUARIOEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSUARIOID","Enabled")',ctrl:'vUSUARIOID',prop:'Enabled'},{av:'AV7Cont',fld:'vCONT'},{av:'AV25UsuarioIdVet',fld:'vUSUARIOIDVET'},{av:'AV31UsuarioEmailVet',fld:'vUSUARIOEMAILVET'},{av:'AV30UsuarioExcVet',fld:'vUSUARIOEXCVET'},{av:'AV27UsuarioNomeVet',fld:'vUSUARIONOMEVET'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6BmpCons',fld:'vBMPCONS',grid:17},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV24UsuarioId',fld:'vUSUARIOID',grid:17},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL',grid:17},{av:'AV29UsuarioExc',fld:'vUSUARIOEXC',grid:17},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'gx.fn.getCtrlProperty("vUSUARIOEXC","Visible")',ctrl:'vUSUARIOEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSUARIOID","Enabled")',ctrl:'vUSUARIOID',prop:'Enabled'},{av:'AV7Cont',fld:'vCONT'},{av:'AV25UsuarioIdVet',fld:'vUSUARIOIDVET'},{av:'AV31UsuarioEmailVet',fld:'vUSUARIOEMAILVET'},{av:'AV30UsuarioExcVet',fld:'vUSUARIOEXCVET'},{av:'AV27UsuarioNomeVet',fld:'vUSUARIONOMEVET'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6BmpCons',fld:'vBMPCONS',grid:17},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV24UsuarioId',fld:'vUSUARIOID',grid:17},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL',grid:17},{av:'AV29UsuarioExc',fld:'vUSUARIOEXC',grid:17},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'gx.fn.getCtrlProperty("vUSUARIOEXC","Visible")',ctrl:'vUSUARIOEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSUARIOID","Enabled")',ctrl:'vUSUARIOID',prop:'Enabled'},{av:'AV7Cont',fld:'vCONT'},{av:'AV25UsuarioIdVet',fld:'vUSUARIOIDVET'},{av:'AV31UsuarioEmailVet',fld:'vUSUARIOEMAILVET'},{av:'AV30UsuarioExcVet',fld:'vUSUARIOEXCVET'},{av:'AV27UsuarioNomeVet',fld:'vUSUARIONOMEVET'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV6BmpCons',fld:'vBMPCONS',grid:17},{av:'Gx_mode',fld:'vMODE',hsh:true},{av:'AV24UsuarioId',fld:'vUSUARIOID',grid:17},{av:'AV32UsuarioEmail',fld:'vUSUARIOEMAIL',grid:17},{av:'AV29UsuarioExc',fld:'vUSUARIOEXC',grid:17},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'gx.fn.getCtrlProperty("vUSUARIOEXC","Visible")',ctrl:'vUSUARIOEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSUARIOID","Enabled")',ctrl:'vUSUARIOID',prop:'Enabled'},{av:'AV7Cont',fld:'vCONT'},{av:'AV25UsuarioIdVet',fld:'vUSUARIOIDVET'},{av:'AV31UsuarioEmailVet',fld:'vUSUARIOEMAILVET'},{av:'AV30UsuarioExcVet',fld:'vUSUARIOEXCVET'},{av:'AV27UsuarioNomeVet',fld:'vUSUARIONOMEVET'}]];
   this.setPrompt("&BMPCONS", [19]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("AV33ConvenioVencimentoParm", "vCONVENIOVENCIMENTOPARM", 0, "date");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV6BmpCons", rfrProp:"Value", gxAttId:"Bmpcons"});
   GridContainer.addRefreshingVar({rfrVar:"Gx_mode"});
   GridContainer.addRefreshingVar({rfrVar:"AV24UsuarioId", rfrProp:"Value", gxAttId:"Usuarioid"});
   GridContainer.addRefreshingVar({rfrVar:"AV32UsuarioEmail", rfrProp:"Value", gxAttId:"Usuarioemail"});
   GridContainer.addRefreshingVar({rfrVar:"AV29UsuarioExc", rfrProp:"Value", gxAttId:"Usuarioexc"});
   GridContainer.addRefreshingVar({rfrVar:"A75UsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalusuarioconvenio());
