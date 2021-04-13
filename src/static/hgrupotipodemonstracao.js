/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:10.66
*/
gx.evt.autoSkip = false;
gx.define('hgrupotipodemonstracao', false, function () {
   this.ServerClass =  "hgrupotipodemonstracao" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11272_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12272_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20272_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21272_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22272_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16272_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13272_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14272_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15272_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e23272_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e24272_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25272_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26272_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,20,22,25,27,30,32,37,40,43,45,47,49,51,54,56,57,61,62,63,64,65,66,67,73,75];
   this.GXLastCtrlId =75;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgrupotipodemonstracao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(272,61,"GRUPOTIPODEMONSTRACAOID","","","GrupoTipoDemonstracaoId","svchar",0,"px",30,30,"left",null,[],272,"GrupoTipoDemonstracaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(245,62,"GRUPOTIPODEMONSTRACAOTITULO","","","GrupoTipoDemonstracaoTitulo","svchar",0,"px",40,40,"left",null,[],245,"GrupoTipoDemonstracaoTitulo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpduplicar","vBMPDUPLICAR",63,0,"px",17,"px","e23272_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px","e20272_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px","e21272_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px","e22272_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(271,67,"TIPODEMONSTRACAOID","Tipo de Demonstração","","TipoDemonstracaoId","int",0,"px",3,3,"right",null,[],271,"TipoDemonstracaoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[14]={fld:"TABLE11",grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODEMONSTRACAOID",gxz:"ZV26TipoDemonstracaoId",gxold:"OV26TipoDemonstracaoId",gxvar:"AV26TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAOID",gx.O.AV26TipoDemonstracaoId,0)},c2v:function(){gx.O.AV26TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODEMONSTRACAODESCRICAO",gxz:"ZV31TipoDemonstracaoDescricao",gxold:"OV31TipoDemonstracaoDescricao",gxvar:"AV31TipoDemonstracaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.ZV31TipoDemonstracaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAODESCRICAO",gx.O.AV31TipoDemonstracaoDescricao,0)},c2v:function(){gx.O.AV31TipoDemonstracaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPODEMONSTRACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"CODIGOGRUPO", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOTIPODEMONSTRACAOID",gxz:"ZV23GrupoTipoDemonstracaoId",gxold:"OV23GrupoTipoDemonstracaoId",gxvar:"AV23GrupoTipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23GrupoTipoDemonstracaoId=Value},v2z:function(Value){gx.O.ZV23GrupoTipoDemonstracaoId=Value},v2c:function(){gx.fn.setControlValue("vGRUPOTIPODEMONSTRACAOID",gx.O.AV23GrupoTipoDemonstracaoId,0)},c2v:function(){gx.O.AV23GrupoTipoDemonstracaoId=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOID")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TITULOGRUPO", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOTIPODEMONSTRACAOTITULO",gxz:"ZV24GrupoTipoDemonstracaoTitulo",gxold:"OV24GrupoTipoDemonstracaoTitulo",gxvar:"AV24GrupoTipoDemonstracaoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24GrupoTipoDemonstracaoTitulo=Value},v2z:function(Value){gx.O.ZV24GrupoTipoDemonstracaoTitulo=Value},v2c:function(){gx.fn.setControlValue("vGRUPOTIPODEMONSTRACAOTITULO",gx.O.AV24GrupoTipoDemonstracaoTitulo,0)},c2v:function(){gx.O.AV24GrupoTipoDemonstracaoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOTIPODEMONSTRACAOTITULO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TABLE6",grid:0};
   GXValidFnc[43]={fld:"IMAGE2",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOID",gxz:"Z272GrupoTipoDemonstracaoId",gxold:"O272GrupoTipoDemonstracaoId",gxvar:"A272GrupoTipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A272GrupoTipoDemonstracaoId=Value},v2z:function(Value){gx.O.Z272GrupoTipoDemonstracaoId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOTIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(60),gx.O.A272GrupoTipoDemonstracaoId,0)},c2v:function(){gx.O.A272GrupoTipoDemonstracaoId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOTIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOTIPODEMONSTRACAOTITULO",gxz:"Z245GrupoTipoDemonstracaoTitulo",gxold:"O245GrupoTipoDemonstracaoTitulo",gxvar:"A245GrupoTipoDemonstracaoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A245GrupoTipoDemonstracaoTitulo=Value},v2z:function(Value){gx.O.Z245GrupoTipoDemonstracaoTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOTIPODEMONSTRACAOTITULO",row || gx.fn.currentGridRowImpl(60),gx.O.A245GrupoTipoDemonstracaoTitulo,0)},c2v:function(){gx.O.A245GrupoTipoDemonstracaoTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOTIPODEMONSTRACAOTITULO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPLICAR",gxz:"ZV25bmpDuplicar",gxold:"OV25bmpDuplicar",gxvar:"AV25bmpDuplicar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25bmpDuplicar=Value},v2z:function(Value){gx.O.ZV25bmpDuplicar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(60),gx.O.AV25bmpDuplicar,gx.O.AV42Bmpduplicar_GXI)},c2v:function(){gx.O.AV42Bmpduplicar_GXI=this.val_GXI();gx.O.AV25bmpDuplicar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV42Bmpduplicar_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(60),gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV26TipoDemonstracaoId = 0 ;
   this.ZV26TipoDemonstracaoId = 0 ;
   this.OV26TipoDemonstracaoId = 0 ;
   this.AV31TipoDemonstracaoDescricao = "" ;
   this.ZV31TipoDemonstracaoDescricao = "" ;
   this.OV31TipoDemonstracaoDescricao = "" ;
   this.AV23GrupoTipoDemonstracaoId = "" ;
   this.ZV23GrupoTipoDemonstracaoId = "" ;
   this.OV23GrupoTipoDemonstracaoId = "" ;
   this.AV24GrupoTipoDemonstracaoTitulo = "" ;
   this.ZV24GrupoTipoDemonstracaoTitulo = "" ;
   this.OV24GrupoTipoDemonstracaoTitulo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z272GrupoTipoDemonstracaoId = "" ;
   this.O272GrupoTipoDemonstracaoId = "" ;
   this.Z245GrupoTipoDemonstracaoTitulo = "" ;
   this.O245GrupoTipoDemonstracaoTitulo = "" ;
   this.ZV25bmpDuplicar = "" ;
   this.OV25bmpDuplicar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV26TipoDemonstracaoId = 0 ;
   this.AV31TipoDemonstracaoDescricao = "" ;
   this.AV23GrupoTipoDemonstracaoId = "" ;
   this.AV24GrupoTipoDemonstracaoTitulo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.A272GrupoTipoDemonstracaoId = "" ;
   this.A245GrupoTipoDemonstracaoTitulo = "" ;
   this.AV25bmpDuplicar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.AV34SnRecuperaFiltro = "" ;
   this.Events = {"e11272_client": ["'ANTERIOR'", true] ,"e12272_client": ["'PROXIMO'", true] ,"e20272_client": ["'ALTERAR'", true] ,"e21272_client": ["'EXCLUIR'", true] ,"e22272_client": ["'CONSULTAR'", true] ,"e16272_client": ["VPAGINA.CLICK", true] ,"e13272_client": ["'NOVO'", true] ,"e14272_client": ["'FECHAR'", true] ,"e15272_client": ["'PROCURAR'", true] ,"e23272_client": ["'DUPLICAR'", true] ,"e24272_client": ["'ATUALIZAPAGINA'", true] ,"e25272_client": ["ENTER", true] ,"e26272_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'GRUPOTIPODEMONSTRACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOTIPODEMONSTRACAOID","Title")',ctrl:'GRUPOTIPODEMONSTRACAOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOTIPODEMONSTRACAOTITULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOTIPODEMONSTRACAOTITULO","Title")',ctrl:'GRUPOTIPODEMONSTRACAOTITULO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV29filtros',fld:'vFILTROS'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV25bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A272GrupoTipoDemonstracaoId',fld:'GRUPOTIPODEMONSTRACAOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23GrupoTipoDemonstracaoId',fld:'vGRUPOTIPODEMONSTRACAOID'},{av:'AV24GrupoTipoDemonstracaoTitulo',fld:'vGRUPOTIPODEMONSTRACAOTITULO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgrupotipodemonstracao());
