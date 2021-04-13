/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:48:10.55
*/
gx.evt.autoSkip = false;
gx.define('hbairro', false, function () {
   this.ServerClass =  "hbairro" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Cidadesid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(52) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CIDADESID", gx.fn.currentGridRowImpl(52));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e110g2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e120g2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e200g2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e210g2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e220g2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e130g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e140g2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e150g2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e160g2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e230g2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e240g2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e250g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,30,33,36,38,40,42,44,47,48,49,53,54,55,56,57,58,59,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",52,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hbairro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(148,53,"BAIRROID","","","BairroId","int",0,"px",7,7,"right",null,[],148,"BairroId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(146,54,"BAIRRONOME","","","BairroNome","svchar",0,"px",40,40,"left",null,[],146,"BairroNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(147,55,"CIDADESID","","","CidadesId","int",0,"px",8,8,"right",null,[],147,"CidadesId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(149,56,"CIDADESNOME","","","CidadesNome","svchar",0,"px",40,40,"left",null,[],149,"CidadesNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",57,0,"px",17,"px","e200g2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",58,0,"px",17,"px","e210g2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",59,0,"px",17,"px","e220g2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESID",gxz:"ZV22CidadesId",gxold:"OV22CidadesId",gxvar:"AV22CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESID",gx.O.AV22CidadesId,0)},c2v:function(){gx.O.AV22CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESNOME",gxz:"ZV23CidadesNome",gxold:"OV23CidadesNome",gxvar:"AV23CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CidadesNome=Value},v2z:function(Value){gx.O.ZV23CidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADESNOME",gx.O.AV23CidadesNome,0)},c2v:function(){gx.O.AV23CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBAIRRONOME",gxz:"ZV24BairroNome",gxold:"OV24BairroNome",gxvar:"AV24BairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24BairroNome=Value},v2z:function(Value){gx.O.ZV24BairroNome=Value},v2c:function(){gx.fn.setControlValue("vBAIRRONOME",gx.O.AV24BairroNome,0)},c2v:function(){gx.O.AV24BairroNome=this.val()},val:function(){return gx.fn.getControlValue("vBAIRRONOME")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABLE6",grid:0};
   GXValidFnc[36]={fld:"IMAGE2",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BAIRROID",gxz:"Z148BairroId",gxold:"O148BairroId",gxvar:"A148BairroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A148BairroId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z148BairroId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BAIRROID",row || gx.fn.currentGridRowImpl(52),gx.O.A148BairroId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A148BairroId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BAIRROID",row || gx.fn.currentGridRowImpl(52),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BAIRRONOME",gxz:"Z146BairroNome",gxold:"O146BairroNome",gxvar:"A146BairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A146BairroNome=Value},v2z:function(Value){gx.O.Z146BairroNome=Value},v2c:function(row){gx.fn.setGridControlValue("BAIRRONOME",row || gx.fn.currentGridRowImpl(52),gx.O.A146BairroNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A146BairroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BAIRRONOME",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESID",row || gx.fn.currentGridRowImpl(52),gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESID",row || gx.fn.currentGridRowImpl(52),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(52),gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(52),gx.O.AV7bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52),gx.O.AV8bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(52),gx.O.AV16bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV22CidadesId = 0 ;
   this.ZV22CidadesId = 0 ;
   this.OV22CidadesId = 0 ;
   this.AV23CidadesNome = "" ;
   this.ZV23CidadesNome = "" ;
   this.OV23CidadesNome = "" ;
   this.AV24BairroNome = "" ;
   this.ZV24BairroNome = "" ;
   this.OV24BairroNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z148BairroId = 0 ;
   this.O148BairroId = 0 ;
   this.Z146BairroNome = "" ;
   this.O146BairroNome = "" ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV22CidadesId = 0 ;
   this.AV23CidadesNome = "" ;
   this.AV24BairroNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A148BairroId = 0 ;
   this.A146BairroNome = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.Events = {"e110g2_client": ["'ANTERIOR'", true] ,"e120g2_client": ["'PROXIMO'", true] ,"e200g2_client": ["'ALTERAR'", true] ,"e210g2_client": ["'EXCLUIR'", true] ,"e220g2_client": ["'CONSULTAR'", true] ,"e130g2_client": ["'FECHAR'", true] ,"e140g2_client": ["'NOVO'", true] ,"e150g2_client": ["'PROCURAR'", true] ,"e160g2_client": ["VPAGINA.CLICK", true] ,"e230g2_client": ["'ATUALIZAPAGINA'", true] ,"e240g2_client": ["ENTER", true] ,"e250g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'BAIRROID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BAIRROID","Title")',ctrl:'BAIRROID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'BAIRRONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BAIRRONOME","Title")',ctrl:'BAIRRONOME',prop:'Title'},{ctrl:'CIDADESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESID","Title")',ctrl:'CIDADESID',prop:'Title'},{ctrl:'CIDADESNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESNOME","Title")',ctrl:'CIDADESNOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'A148BairroId',fld:'BAIRROID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A148BairroId',fld:'BAIRROID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'A148BairroId',fld:'BAIRROID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A148BairroId',fld:'BAIRROID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'A148BairroId',fld:'BAIRROID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A148BairroId',fld:'BAIRROID'},{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'NOVO'"] = [[{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23CidadesNome',fld:'vCIDADESNOME',hsh:true},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24BairroNome',fld:'vBAIRRONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID',hsh:true},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbairro());
