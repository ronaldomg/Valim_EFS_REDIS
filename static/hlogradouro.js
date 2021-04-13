/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:43.83
*/
gx.evt.autoSkip = false;
gx.define('hlogradouro', false, function () {
   this.ServerClass =  "hlogradouro" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A148BairroId=gx.fn.getIntegerValue("BAIRROID",'.') ;
      this.A353LogradouroBairroInicial=gx.fn.getIntegerValue("LOGRADOUROBAIRROINICIAL",'.') ;
      this.A146BairroNome=gx.fn.getControlValue("BAIRRONOME") ;
   };
   this.Validv_Cidadesid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCIDADESID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112n2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122n2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e202n2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212n2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222n2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162n2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132n2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152n2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e232n2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242n2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,21,24,26,29,31,34,36,41,44,47,49,51,53,55,58,60,61,65,66,67,68,69,70,71,78,79,80];
   this.GXLastCtrlId =80;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",64,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlogradouro",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(355,65,"LOGRADOURONOCEP","","","LogradouroNoCep","char",0,"px",9,9,"left",null,[],355,"LogradouroNoCep",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(350,66,"LOGRADOUROTIPOLOGRADOURO","","","LogradouroTipoLogradouro","char",0,"px",15,15,"left",null,[],350,"LogradouroTipoLogradouro",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(351,67,"LOGRADOURONOME","","","LogradouroNome","svchar",0,"px",60,60,"left",null,[],351,"LogradouroNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Bairronome",68,"vBAIRRONOME","Bairro","","BairroNome","svchar",0,"px",40,40,"left",null,[],"Bairronome","BairroNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",69,0,"px",17,"px","e202n2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",70,0,"px",17,"px","e212n2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",71,0,"px",17,"px","e222n2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE9",grid:0};
   GXValidFnc[14]={fld:"TABLE7",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Cidadesid,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESID",gxz:"ZV22CidadesId",gxold:"OV22CidadesId",gxvar:"AV22CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESID",gx.O.AV22CidadesId,0)},c2v:function(){gx.O.AV22CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCIDADESNOME",gxz:"ZV24CidadesNome",gxold:"OV24CidadesNome",gxvar:"AV24CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24CidadesNome=Value},v2z:function(Value){gx.O.ZV24CidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADESNOME",gx.O.AV24CidadesNome,0)},c2v:function(){gx.O.AV24CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE10",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBAIRROID",gxz:"ZV29BairroId",gxold:"OV29BairroId",gxvar:"AV29BairroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29BairroId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29BairroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBAIRROID",gx.O.AV29BairroId,0)},c2v:function(){gx.O.AV29BairroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBAIRROID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBAIRRONOMESELECAO",gxz:"ZV30BairroNomeSelecao",gxold:"OV30BairroNomeSelecao",gxvar:"AV30BairroNomeSelecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30BairroNomeSelecao=Value},v2z:function(Value){gx.O.ZV30BairroNomeSelecao=Value},v2c:function(){gx.fn.setControlValue("vBAIRRONOMESELECAO",gx.O.AV30BairroNomeSelecao,0)},c2v:function(){gx.O.AV30BairroNomeSelecao=this.val()},val:function(){return gx.fn.getControlValue("vBAIRRONOMESELECAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOGRADOURONOME",gxz:"ZV27LogradouroNome",gxold:"OV27LogradouroNome",gxvar:"AV27LogradouroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27LogradouroNome=Value},v2z:function(Value){gx.O.ZV27LogradouroNome=Value},v2c:function(){gx.fn.setControlValue("vLOGRADOURONOME",gx.O.AV27LogradouroNome,0)},c2v:function(){gx.O.AV27LogradouroNome=this.val()},val:function(){return gx.fn.getControlValue("vLOGRADOURONOME")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE4",grid:0};
   GXValidFnc[44]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={fld:"IMAGE2",grid:0};
   GXValidFnc[49]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[51]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   GXValidFnc[55]={fld:"TABLE5",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOURONOCEP",gxz:"Z355LogradouroNoCep",gxold:"O355LogradouroNoCep",gxvar:"A355LogradouroNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A355LogradouroNoCep=Value},v2z:function(Value){gx.O.Z355LogradouroNoCep=Value},v2c:function(row){gx.fn.setGridControlValue("LOGRADOURONOCEP",row || gx.fn.currentGridRowImpl(64),gx.O.A355LogradouroNoCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A355LogradouroNoCep=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGRADOURONOCEP",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROTIPOLOGRADOURO",gxz:"Z350LogradouroTipoLogradouro",gxold:"O350LogradouroTipoLogradouro",gxvar:"A350LogradouroTipoLogradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A350LogradouroTipoLogradouro=Value},v2z:function(Value){gx.O.Z350LogradouroTipoLogradouro=Value},v2c:function(row){gx.fn.setGridControlValue("LOGRADOUROTIPOLOGRADOURO",row || gx.fn.currentGridRowImpl(64),gx.O.A350LogradouroTipoLogradouro,0)},c2v:function(){gx.O.A350LogradouroTipoLogradouro=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGRADOUROTIPOLOGRADOURO",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOURONOME",gxz:"Z351LogradouroNome",gxold:"O351LogradouroNome",gxvar:"A351LogradouroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A351LogradouroNome=Value},v2z:function(Value){gx.O.Z351LogradouroNome=Value},v2c:function(row){gx.fn.setGridControlValue("LOGRADOURONOME",row || gx.fn.currentGridRowImpl(64),gx.O.A351LogradouroNome,0)},c2v:function(){gx.O.A351LogradouroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGRADOURONOME",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBAIRRONOME",gxz:"ZV28BairroNome",gxold:"OV28BairroNome",gxvar:"AV28BairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28BairroNome=Value},v2z:function(Value){gx.O.ZV28BairroNome=Value},v2c:function(row){gx.fn.setGridControlValue("vBAIRRONOME",row || gx.fn.currentGridRowImpl(64),gx.O.AV28BairroNome,0)},c2v:function(){gx.O.AV28BairroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vBAIRRONOME",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(64),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(64),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(64),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[78]={fld:"JS", format:2,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"PROMPT_BAIRROID",grid:0};
   this.AV22CidadesId = 0 ;
   this.ZV22CidadesId = 0 ;
   this.OV22CidadesId = 0 ;
   this.AV24CidadesNome = "" ;
   this.ZV24CidadesNome = "" ;
   this.OV24CidadesNome = "" ;
   this.AV29BairroId = 0 ;
   this.ZV29BairroId = 0 ;
   this.OV29BairroId = 0 ;
   this.AV30BairroNomeSelecao = "" ;
   this.ZV30BairroNomeSelecao = "" ;
   this.OV30BairroNomeSelecao = "" ;
   this.AV27LogradouroNome = "" ;
   this.ZV27LogradouroNome = "" ;
   this.OV27LogradouroNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z355LogradouroNoCep = "" ;
   this.O355LogradouroNoCep = "" ;
   this.Z350LogradouroTipoLogradouro = "" ;
   this.O350LogradouroTipoLogradouro = "" ;
   this.Z351LogradouroNome = "" ;
   this.O351LogradouroNome = "" ;
   this.ZV28BairroNome = "" ;
   this.OV28BairroNome = "" ;
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
   this.AV24CidadesNome = "" ;
   this.AV29BairroId = 0 ;
   this.AV30BairroNomeSelecao = "" ;
   this.AV27LogradouroNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A147CidadesId = 0 ;
   this.A353LogradouroBairroInicial = 0 ;
   this.A355LogradouroNoCep = "" ;
   this.A350LogradouroTipoLogradouro = "" ;
   this.A351LogradouroNome = "" ;
   this.AV28BairroNome = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A148BairroId = 0 ;
   this.A146BairroNome = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.Events = {"e112n2_client": ["'ANTERIOR'", true] ,"e122n2_client": ["'PROXIMO'", true] ,"e202n2_client": ["'ALTERAR'", true] ,"e212n2_client": ["'EXCLUIR'", true] ,"e222n2_client": ["'CONSULTAR'", true] ,"e162n2_client": ["VPAGINA.CLICK", true] ,"e132n2_client": ["'NOVO'", true] ,"e142n2_client": ["'FECHAR'", true] ,"e152n2_client": ["'PROCURAR'", true] ,"e232n2_client": ["'ATUALIZAPAGINA'", true] ,"e242n2_client": ["ENTER", true] ,"e252n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[{ctrl:'LOGRADOURONOCEP',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOGRADOURONOCEP","Title")',ctrl:'LOGRADOURONOCEP',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LOGRADOUROTIPOLOGRADOURO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOGRADOUROTIPOLOGRADOURO","Title")',ctrl:'LOGRADOUROTIPOLOGRADOURO',prop:'Title'},{ctrl:'LOGRADOURONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOGRADOURONOME","Title")',ctrl:'LOGRADOURONOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV33filtros',fld:'vFILTROS'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28BairroNome',fld:'vBAIRRONOME'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'},{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV33filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'},{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV33filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'},{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV33filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV33filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'A355LogradouroNoCep',fld:'LOGRADOURONOCEP'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'}],[{av:'AV23NoCep',fld:'vNOCEP'},{av:'AV24CidadesNome',fld:'vCIDADESNOME'},{av:'AV22CidadesId',fld:'vCIDADESID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29BairroId',fld:'vBAIRROID'},{av:'AV27LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22CidadesId',fld:'vCIDADESID'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A148BairroId',fld:'BAIRROID'},{av:'A353LogradouroBairroInicial',fld:'LOGRADOUROBAIRROINICIAL'},{av:'A146BairroNome',fld:'BAIRRONOME'}],[]];
   this.setPrompt("PROMPT_BAIRROID", [29]);
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A148BairroId", "BAIRROID", 0, "int");
   this.setVCMap("A353LogradouroBairroInicial", "LOGRADOUROBAIRROINICIAL", 0, "int");
   this.setVCMap("A146BairroNome", "BAIRRONOME", 0, "svchar");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A148BairroId", "BAIRROID", 0, "int");
   this.setVCMap("A353LogradouroBairroInicial", "LOGRADOUROBAIRROINICIAL", 0, "int");
   this.setVCMap("A146BairroNome", "BAIRRONOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A148BairroId"});
   GridContainer.addRefreshingVar({rfrVar:"A353LogradouroBairroInicial"});
   GridContainer.addRefreshingVar({rfrVar:"A146BairroNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlogradouro());
