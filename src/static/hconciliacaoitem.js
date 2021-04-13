/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:0:43.72
*/
gx.evt.autoSkip = false;
gx.define('hconciliacaoitem', false, function () {
   this.ServerClass =  "hconciliacaoitem" ;
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
      this.AV27ConciliacaoEmpresaId=gx.fn.getControlValue("vCONCILIACAOEMPRESAID") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Conciliacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONCILIACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11al2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12al2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20al2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21al2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22al2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16al2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13al2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14al2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15al2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e23al2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e24al2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53];
   this.GXLastCtrlId =53;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconciliacaoitem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1527,47,"CONCILIACAOITEMSEQ","Sequência","","ConciliacaoItemSeq","int",0,"px",4,4,"right",null,[],1527,"ConciliacaoItemSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1814,48,"CONCILIACAOITEMTIPOSELECAO","Tipo Seleção","ConciliacaoItemTipoSelecao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",49,0,"px",17,"px","e20al2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",50,0,"px",17,"px","e21al2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",51,0,"px",17,"px","e22al2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1497,52,"CONCILIACAOEMPRESAID","Empresa","","ConciliacaoEmpresaId","char",0,"px",10,10,"left",null,[],1497,"ConciliacaoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1498,53,"CONCILIACAOID","Código Conciliação","","ConciliacaoId","int",0,"px",3,3,"right",null,[],1498,"ConciliacaoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Conciliacaoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCONCILIACAOID",gxz:"ZV28ConciliacaoId",gxold:"OV28ConciliacaoId",gxvar:"AV28ConciliacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ConciliacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ConciliacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONCILIACAOID",gx.O.AV28ConciliacaoId,0)},c2v:function(){gx.O.AV28ConciliacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONCILIACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONCILIACAODESCRICAO",gxz:"ZV29ConciliacaoDescricao",gxold:"OV29ConciliacaoDescricao",gxvar:"AV29ConciliacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ConciliacaoDescricao=Value},v2z:function(Value){gx.O.ZV29ConciliacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONCILIACAODESCRICAO",gx.O.AV29ConciliacaoDescricao,0)},c2v:function(){gx.O.AV29ConciliacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONCILIACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMSEQ",gxz:"Z1527ConciliacaoItemSeq",gxold:"O1527ConciliacaoItemSeq",gxvar:"A1527ConciliacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1527ConciliacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1527ConciliacaoItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONCILIACAOITEMSEQ",row || gx.fn.currentGridRowImpl(46),gx.O.A1527ConciliacaoItemSeq,0)},c2v:function(){gx.O.A1527ConciliacaoItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONCILIACAOITEMSEQ",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOITEMTIPOSELECAO",gxz:"Z1814ConciliacaoItemTipoSelecao",gxold:"O1814ConciliacaoItemTipoSelecao",gxvar:"A1814ConciliacaoItemTipoSelecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1814ConciliacaoItemTipoSelecao=Value},v2z:function(Value){gx.O.Z1814ConciliacaoItemTipoSelecao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONCILIACAOITEMTIPOSELECAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1814ConciliacaoItemTipoSelecao)},c2v:function(){gx.O.A1814ConciliacaoItemTipoSelecao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONCILIACAOITEMTIPOSELECAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOEMPRESAID",gxz:"Z1497ConciliacaoEmpresaId",gxold:"O1497ConciliacaoEmpresaId",gxvar:"A1497ConciliacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1497ConciliacaoEmpresaId=Value},v2z:function(Value){gx.O.Z1497ConciliacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONCILIACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1497ConciliacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1497ConciliacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONCILIACAOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONCILIACAOID",gxz:"Z1498ConciliacaoId",gxold:"O1498ConciliacaoId",gxvar:"A1498ConciliacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1498ConciliacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1498ConciliacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONCILIACAOID",row || gx.fn.currentGridRowImpl(46),gx.O.A1498ConciliacaoId,0)},c2v:function(){gx.O.A1498ConciliacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONCILIACAOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   this.AV28ConciliacaoId = 0 ;
   this.ZV28ConciliacaoId = 0 ;
   this.OV28ConciliacaoId = 0 ;
   this.AV29ConciliacaoDescricao = "" ;
   this.ZV29ConciliacaoDescricao = "" ;
   this.OV29ConciliacaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1527ConciliacaoItemSeq = 0 ;
   this.O1527ConciliacaoItemSeq = 0 ;
   this.Z1814ConciliacaoItemTipoSelecao = "" ;
   this.O1814ConciliacaoItemTipoSelecao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1497ConciliacaoEmpresaId = "" ;
   this.O1497ConciliacaoEmpresaId = "" ;
   this.Z1498ConciliacaoId = 0 ;
   this.O1498ConciliacaoId = 0 ;
   this.AV28ConciliacaoId = 0 ;
   this.AV29ConciliacaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV27ConciliacaoEmpresaId = "" ;
   this.A1527ConciliacaoItemSeq = 0 ;
   this.A1814ConciliacaoItemTipoSelecao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1497ConciliacaoEmpresaId = "" ;
   this.A1498ConciliacaoId = 0 ;
   this.AV34SnRecuperaFiltro = "" ;
   this.Events = {"e11al2_client": ["'ANTERIOR'", true] ,"e12al2_client": ["'PROXIMO'", true] ,"e20al2_client": ["'ALTERAR'", true] ,"e21al2_client": ["'EXCLUIR'", true] ,"e22al2_client": ["'CONSULTAR'", true] ,"e16al2_client": ["VPAGINA.CLICK", true] ,"e13al2_client": ["'NOVO'", true] ,"e14al2_client": ["'FECHAR'", true] ,"e15al2_client": ["'PROCURAR'", true] ,"e23al2_client": ["ENTER", true] ,"e24al2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{ctrl:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{ctrl:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{ctrl:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{ctrl:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{ctrl:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'}],[{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConciliacaoEmpresaId',fld:'vCONCILIACAOEMPRESAID'},{av:'AV28ConciliacaoId',fld:'vCONCILIACAOID'},{ctrl:'CONCILIACAOITEMTIPOSELECAO'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'AV29ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'A1814ConciliacaoItemTipoSelecao',fld:'CONCILIACAOITEMTIPOSELECAO'},{av:'A1527ConciliacaoItemSeq',fld:'CONCILIACAOITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV27ConciliacaoEmpresaId", "vCONCILIACAOEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV27ConciliacaoEmpresaId", "vCONCILIACAOEMPRESAID", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV27ConciliacaoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"A1814ConciliacaoItemTipoSelecao", rfrProp:"Visible", gxAttId:"1814"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1497ConciliacaoEmpresaId", rfrProp:"Value", gxAttId:"1497"});
   GridContainer.addRefreshingVar({rfrVar:"A1498ConciliacaoId", rfrProp:"Value", gxAttId:"1498"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar({rfrVar:"A1814ConciliacaoItemTipoSelecao", rfrProp:"Value", gxAttId:"1814"});
   GridContainer.addRefreshingVar({rfrVar:"A1527ConciliacaoItemSeq", rfrProp:"Value", gxAttId:"1527"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconciliacaoitem());
