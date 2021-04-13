/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:0:41.49
*/
gx.evt.autoSkip = false;
gx.define('hconciliacao', false, function () {
   this.ServerClass =  "hconciliacao" ;
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
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11ak2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ak2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20ak2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21ak2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16ak2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ak2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ak2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ak2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e22ak2_client=function()
   {
      this.executeServerEvent("'EXCLUICONCILIACAO'", true, arguments[0], false, false);
   };
   this.e23ak2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24ak2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25ak2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,45,47,48,52,53,54,55,56,57,58,59,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconciliacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1498,52,"CONCILIACAOID","","","ConciliacaoId","int",0,"px",3,3,"right",null,[],1498,"ConciliacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1492,53,"CONCILIACAODESCRICAO","","","ConciliacaoDescricao","svchar",0,"px",40,40,"left",null,[],1492,"ConciliacaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(1493,54,"CONCILIACAOTIPOCOMPARACAO","Tipo Comparação","ConciliacaoTipoComparacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpitensconci","vBMPITENSCONCI",55,0,"px",17,"px",null,"","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",56,0,"px",17,"px","e20ak2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",57,0,"px",17,"px","e22ak2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",58,0,"px",17,"px","e21ak2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1497,59,"CONCILIACAOEMPRESAID","Empresa","","ConciliacaoEmpresaId","char",0,"px",10,10,"left",null,[],1497,"ConciliacaoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONCILIACAOID",gxz:"ZV28ConciliacaoId",gxold:"OV28ConciliacaoId",gxvar:"AV28ConciliacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ConciliacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ConciliacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONCILIACAOID",gx.O.AV28ConciliacaoId,0)},c2v:function(){gx.O.AV28ConciliacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONCILIACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONCILIACAODESCRICAO",gxz:"ZV29ConciliacaoDescricao",gxold:"OV29ConciliacaoDescricao",gxvar:"AV29ConciliacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ConciliacaoDescricao=Value},v2z:function(Value){gx.O.ZV29ConciliacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONCILIACAODESCRICAO",gx.O.AV29ConciliacaoDescricao,0)},c2v:function(){gx.O.AV29ConciliacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONCILIACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONCILIACAOTIPOCOMPARACAO",gxz:"ZV30ConciliacaoTipoComparacao",gxold:"OV30ConciliacaoTipoComparacao",gxvar:"AV30ConciliacaoTipoComparacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30ConciliacaoTipoComparacao=Value},v2z:function(Value){gx.O.ZV30ConciliacaoTipoComparacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCONCILIACAOTIPOCOMPARACAO",gx.O.AV30ConciliacaoTipoComparacao)},c2v:function(){gx.O.AV30ConciliacaoTipoComparacao=this.val()},val:function(){return gx.fn.getControlValue("vCONCILIACAOTIPOCOMPARACAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE8",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOID",gxz:"Z1498ConciliacaoId",gxold:"O1498ConciliacaoId",gxvar:"A1498ConciliacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1498ConciliacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1498ConciliacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONCILIACAOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1498ConciliacaoId,0)},c2v:function(){gx.O.A1498ConciliacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONCILIACAOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAODESCRICAO",gxz:"Z1492ConciliacaoDescricao",gxold:"O1492ConciliacaoDescricao",gxvar:"A1492ConciliacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1492ConciliacaoDescricao=Value},v2z:function(Value){gx.O.Z1492ConciliacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONCILIACAODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1492ConciliacaoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1492ConciliacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONCILIACAODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOTIPOCOMPARACAO",gxz:"Z1493ConciliacaoTipoComparacao",gxold:"O1493ConciliacaoTipoComparacao",gxvar:"A1493ConciliacaoTipoComparacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1493ConciliacaoTipoComparacao=Value},v2z:function(Value){gx.O.Z1493ConciliacaoTipoComparacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONCILIACAOTIPOCOMPARACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1493ConciliacaoTipoComparacao)},c2v:function(){gx.O.A1493ConciliacaoTipoComparacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONCILIACAOTIPOCOMPARACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITENSCONCI",gxz:"ZV27bmpItensConci",gxold:"OV27bmpItensConci",gxvar:"AV27bmpItensConci",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpItensConci=Value},v2z:function(Value){gx.O.ZV27bmpItensConci=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITENSCONCI",row || gx.fn.currentGridRowImpl(51),gx.O.AV27bmpItensConci,gx.O.AV39Bmpitensconci_GXI)},c2v:function(){gx.O.AV39Bmpitensconci_GXI=this.val_GXI();gx.O.AV27bmpItensConci=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITENSCONCI",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITENSCONCI_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV39Bmpitensconci_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOEMPRESAID",gxz:"Z1497ConciliacaoEmpresaId",gxold:"O1497ConciliacaoEmpresaId",gxvar:"A1497ConciliacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1497ConciliacaoEmpresaId=Value},v2z:function(Value){gx.O.Z1497ConciliacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONCILIACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1497ConciliacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1497ConciliacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONCILIACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28ConciliacaoId = 0 ;
   this.ZV28ConciliacaoId = 0 ;
   this.OV28ConciliacaoId = 0 ;
   this.AV29ConciliacaoDescricao = "" ;
   this.ZV29ConciliacaoDescricao = "" ;
   this.OV29ConciliacaoDescricao = "" ;
   this.AV30ConciliacaoTipoComparacao = "" ;
   this.ZV30ConciliacaoTipoComparacao = "" ;
   this.OV30ConciliacaoTipoComparacao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1498ConciliacaoId = 0 ;
   this.O1498ConciliacaoId = 0 ;
   this.Z1492ConciliacaoDescricao = "" ;
   this.O1492ConciliacaoDescricao = "" ;
   this.Z1493ConciliacaoTipoComparacao = "" ;
   this.O1493ConciliacaoTipoComparacao = "" ;
   this.ZV27bmpItensConci = "" ;
   this.OV27bmpItensConci = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1497ConciliacaoEmpresaId = "" ;
   this.O1497ConciliacaoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28ConciliacaoId = 0 ;
   this.AV29ConciliacaoDescricao = "" ;
   this.AV30ConciliacaoTipoComparacao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1498ConciliacaoId = 0 ;
   this.A1492ConciliacaoDescricao = "" ;
   this.A1493ConciliacaoTipoComparacao = "" ;
   this.AV27bmpItensConci = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1497ConciliacaoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e11ak2_client": ["'ANTERIOR'", true] ,"e12ak2_client": ["'PROXIMO'", true] ,"e20ak2_client": ["'ALTERAR'", true] ,"e21ak2_client": ["'CONSULTAR'", true] ,"e16ak2_client": ["VPAGINA.CLICK", true] ,"e13ak2_client": ["'NOVO'", true] ,"e14ak2_client": ["'FECHAR'", true] ,"e15ak2_client": ["'PROCURAR'", true] ,"e22ak2_client": ["'EXCLUICONCILIACAO'", true] ,"e23ak2_client": ["'ATUALIZAPAGINA'", true] ,"e24ak2_client": ["ENTER", true] ,"e25ak2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'}],[{ctrl:'CONCILIACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONCILIACAOID","Title")',ctrl:'CONCILIACAOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONCILIACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONCILIACAODESCRICAO","Title")',ctrl:'CONCILIACAODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpItensConci',fld:'vBMPITENSCONCI'},{av:'gx.fn.getCtrlProperty("vBMPITENSCONCI","Tooltiptext")',ctrl:'vBMPITENSCONCI',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPITENSCONCI","Link")',ctrl:'vBMPITENSCONCI',prop:'Link'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUICONCILIACAO'"] = [[{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV30ConciliacaoTipoComparacao',fld:'vCONCILIACAOTIPOCOMPARACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1497ConciliacaoEmpresaId", rfrProp:"Value", gxAttId:"1497"});
   GridContainer.addRefreshingVar({rfrVar:"A1498ConciliacaoId", rfrProp:"Value", gxAttId:"1498"});
   GridContainer.addRefreshingVar({rfrVar:"A1492ConciliacaoDescricao", rfrProp:"Value", gxAttId:"1492"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconciliacao());
