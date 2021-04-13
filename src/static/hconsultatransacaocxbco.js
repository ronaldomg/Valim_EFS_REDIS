/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:34.46
*/
gx.evt.autoSkip = false;
gx.define('hconsultatransacaocxbco', false, function () {
   this.ServerClass =  "hconsultatransacaocxbco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19PTransacaoCxBcoSigla=gx.fn.getControlValue("vPTRANSACAOCXBCOSIGLA") ;
   };
   this.e17972_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11972_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12972_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13972_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14972_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15972_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19972_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21971_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,24,27,29,32,34,40,41,42,43,44,50,53,55,57,59,61,62,63,64,65,66,67];
   this.GXLastCtrlId =67;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",39,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatransacaocxbco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1114,40,"TRANSACAOCXBCOSIGLA","","","TransacaoCxBcoSigla","char",0,"px",8,8,"left",null,[],1114,"TransacaoCxBcoSigla",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1116,41,"TRANSACAOCXBCODESCRICAO","","","TransacaoCxBcoDescricao","svchar",0,"px",40,40,"left",null,[],1116,"TransacaoCxBcoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1100,42,"TRANSACAOCXBCOHISTORICODESCRIC","","","TransacaoCxBcoHistoricoDescric","svchar",0,"px",25,25,"left",null,[],1100,"TransacaoCxBcoHistoricoDescric",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1109,43,"TRANSACAOCXBCOCCUSTOID","","","TransacaoCxBcoCCustoId","svchar",0,"px",30,30,"left",null,[],1109,"TransacaoCxBcoCCustoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1112,44,"TRANSACAOCXBCONATUREZAID","","","TransacaoCxBcoNaturezaId","svchar",0,"px",30,30,"left",null,[],1112,"TransacaoCxBcoNaturezaId",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCOSIGLA",gxz:"ZV15TransacaoCxBcoSigla",gxold:"OV15TransacaoCxBcoSigla",gxvar:"AV15TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV15TransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOSIGLA",gx.O.AV15TransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV15TransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCODESCRICAO",gxz:"ZV16TransacaoCxBcoDescricao",gxold:"OV16TransacaoCxBcoDescricao",gxvar:"AV16TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV16TransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCODESCRICAO",gx.O.AV16TransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV16TransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCOHISTORICOID",gxz:"ZV21TransacaoCxBcoHistoricoId",gxold:"OV21TransacaoCxBcoHistoricoId",gxvar:"AV21TransacaoCxBcoHistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TransacaoCxBcoHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21TransacaoCxBcoHistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOHISTORICOID",gx.O.AV21TransacaoCxBcoHistoricoId,0)},c2v:function(){gx.O.AV21TransacaoCxBcoHistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSACAOCXBCOHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSACAOCXBCOHISTORICODESCRICAO",gxz:"ZV22TransacaoCxBcoHistoricoDescricao",gxold:"OV22TransacaoCxBcoHistoricoDescricao",gxvar:"AV22TransacaoCxBcoHistoricoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TransacaoCxBcoHistoricoDescricao=Value},v2z:function(Value){gx.O.ZV22TransacaoCxBcoHistoricoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOHISTORICODESCRICAO",gx.O.AV22TransacaoCxBcoHistoricoDescricao,0)},c2v:function(){gx.O.AV22TransacaoCxBcoHistoricoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOHISTORICODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCOCCUSTOID",gxz:"ZV17TransacaoCxBcoCCustoId",gxold:"OV17TransacaoCxBcoCCustoId",gxvar:"AV17TransacaoCxBcoCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TransacaoCxBcoCCustoId=Value},v2z:function(Value){gx.O.ZV17TransacaoCxBcoCCustoId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCOCCUSTOID",gx.O.AV17TransacaoCxBcoCCustoId,0)},c2v:function(){gx.O.AV17TransacaoCxBcoCCustoId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCOCCUSTOID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCXBCONATUREZAID",gxz:"ZV18TransacaoCxBcoNaturezaId",gxold:"OV18TransacaoCxBcoNaturezaId",gxvar:"AV18TransacaoCxBcoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TransacaoCxBcoNaturezaId=Value},v2z:function(Value){gx.O.ZV18TransacaoCxBcoNaturezaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCXBCONATUREZAID",gx.O.AV18TransacaoCxBcoNaturezaId,0)},c2v:function(){gx.O.AV18TransacaoCxBcoNaturezaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCXBCONATUREZAID")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOSIGLA",gxz:"Z1114TransacaoCxBcoSigla",gxold:"O1114TransacaoCxBcoSigla",gxvar:"A1114TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1114TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.Z1114TransacaoCxBcoSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOSIGLA",row || gx.fn.currentGridRowImpl(39),gx.O.A1114TransacaoCxBcoSigla,0)},c2v:function(){gx.O.A1114TransacaoCxBcoSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOSIGLA",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCODESCRICAO",gxz:"Z1116TransacaoCxBcoDescricao",gxold:"O1116TransacaoCxBcoDescricao",gxvar:"A1116TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1116TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.Z1116TransacaoCxBcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCODESCRICAO",row || gx.fn.currentGridRowImpl(39),gx.O.A1116TransacaoCxBcoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1116TransacaoCxBcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCODESCRICAO",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOHISTORICODESCRIC",gxz:"Z1100TransacaoCxBcoHistoricoDescric",gxold:"O1100TransacaoCxBcoHistoricoDescric",gxvar:"A1100TransacaoCxBcoHistoricoDescric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1100TransacaoCxBcoHistoricoDescric=Value},v2z:function(Value){gx.O.Z1100TransacaoCxBcoHistoricoDescric=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOHISTORICODESCRIC",row || gx.fn.currentGridRowImpl(39),gx.O.A1100TransacaoCxBcoHistoricoDescric,0)},c2v:function(){gx.O.A1100TransacaoCxBcoHistoricoDescric=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOHISTORICODESCRIC",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOCCUSTOID",gxz:"Z1109TransacaoCxBcoCCustoId",gxold:"O1109TransacaoCxBcoCCustoId",gxvar:"A1109TransacaoCxBcoCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1109TransacaoCxBcoCCustoId=Value},v2z:function(Value){gx.O.Z1109TransacaoCxBcoCCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOCCUSTOID",row || gx.fn.currentGridRowImpl(39),gx.O.A1109TransacaoCxBcoCCustoId,0)},c2v:function(){gx.O.A1109TransacaoCxBcoCCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOCCUSTOID",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:39,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCONATUREZAID",gxz:"Z1112TransacaoCxBcoNaturezaId",gxold:"O1112TransacaoCxBcoNaturezaId",gxvar:"A1112TransacaoCxBcoNaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1112TransacaoCxBcoNaturezaId=Value},v2z:function(Value){gx.O.Z1112TransacaoCxBcoNaturezaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCONATUREZAID",row || gx.fn.currentGridRowImpl(39),gx.O.A1112TransacaoCxBcoNaturezaId,0)},c2v:function(){gx.O.A1112TransacaoCxBcoNaturezaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCONATUREZAID",row || gx.fn.currentGridRowImpl(39))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLENAV",grid:0};
   GXValidFnc[53]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[61]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOHIST",gxz:"ZV23EmpresaPadraoHist",gxold:"OV23EmpresaPadraoHist",gxvar:"AV23EmpresaPadraoHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpresaPadraoHist=Value},v2z:function(Value){gx.O.ZV23EmpresaPadraoHist=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOHIST",gx.O.AV23EmpresaPadraoHist,0)},c2v:function(){gx.O.AV23EmpresaPadraoHist=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOHIST")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"PROMPT_TRANSACAOCXBCOHISTORICOID",grid:0};
   this.AV15TransacaoCxBcoSigla = "" ;
   this.ZV15TransacaoCxBcoSigla = "" ;
   this.OV15TransacaoCxBcoSigla = "" ;
   this.AV16TransacaoCxBcoDescricao = "" ;
   this.ZV16TransacaoCxBcoDescricao = "" ;
   this.OV16TransacaoCxBcoDescricao = "" ;
   this.AV21TransacaoCxBcoHistoricoId = 0 ;
   this.ZV21TransacaoCxBcoHistoricoId = 0 ;
   this.OV21TransacaoCxBcoHistoricoId = 0 ;
   this.AV22TransacaoCxBcoHistoricoDescricao = "" ;
   this.ZV22TransacaoCxBcoHistoricoDescricao = "" ;
   this.OV22TransacaoCxBcoHistoricoDescricao = "" ;
   this.AV17TransacaoCxBcoCCustoId = "" ;
   this.ZV17TransacaoCxBcoCCustoId = "" ;
   this.OV17TransacaoCxBcoCCustoId = "" ;
   this.AV18TransacaoCxBcoNaturezaId = "" ;
   this.ZV18TransacaoCxBcoNaturezaId = "" ;
   this.OV18TransacaoCxBcoNaturezaId = "" ;
   this.Z1114TransacaoCxBcoSigla = "" ;
   this.O1114TransacaoCxBcoSigla = "" ;
   this.Z1116TransacaoCxBcoDescricao = "" ;
   this.O1116TransacaoCxBcoDescricao = "" ;
   this.Z1100TransacaoCxBcoHistoricoDescric = "" ;
   this.O1100TransacaoCxBcoHistoricoDescric = "" ;
   this.Z1109TransacaoCxBcoCCustoId = "" ;
   this.O1109TransacaoCxBcoCCustoId = "" ;
   this.Z1112TransacaoCxBcoNaturezaId = "" ;
   this.O1112TransacaoCxBcoNaturezaId = "" ;
   this.AV23EmpresaPadraoHist = "" ;
   this.ZV23EmpresaPadraoHist = "" ;
   this.OV23EmpresaPadraoHist = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15TransacaoCxBcoSigla = "" ;
   this.AV16TransacaoCxBcoDescricao = "" ;
   this.AV21TransacaoCxBcoHistoricoId = 0 ;
   this.AV22TransacaoCxBcoHistoricoDescricao = "" ;
   this.AV17TransacaoCxBcoCCustoId = "" ;
   this.AV18TransacaoCxBcoNaturezaId = "" ;
   this.AV23EmpresaPadraoHist = "" ;
   this.AV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19PTransacaoCxBcoSigla = "" ;
   this.A1099TransacaoCxBcoHistoricoId = 0 ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.A1098TransacaoCxBcoHistoricoEmpresa = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1116TransacaoCxBcoDescricao = "" ;
   this.A1100TransacaoCxBcoHistoricoDescric = "" ;
   this.A1109TransacaoCxBcoCCustoId = "" ;
   this.A1112TransacaoCxBcoNaturezaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17972_client": ["ENTER", true] ,"e11972_client": ["'GXM_FIRST'", true] ,"e12972_client": ["'GXM_PREVIOUS'", true] ,"e13972_client": ["'GXM_NEXT'", true] ,"e14972_client": ["'GXM_LAST'", true] ,"e15972_client": ["'PROCURAR'", true] ,"e19972_client": ["'ATUALIZAPAGINA'", true] ,"e21971_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV16TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV21TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17TransacaoCxBcoCCustoId',fld:'vTRANSACAOCXBCOCCUSTOID'},{av:'AV18TransacaoCxBcoNaturezaId',fld:'vTRANSACAOCXBCONATUREZAID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TRANSACAOCXBCOSIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCOSIGLA","Title")',ctrl:'TRANSACAOCXBCOSIGLA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOCXBCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCODESCRICAO","Title")',ctrl:'TRANSACAOCXBCODESCRICAO',prop:'Title'},{ctrl:'TRANSACAOCXBCOHISTORICODESCRIC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCOHISTORICODESCRIC","Title")',ctrl:'TRANSACAOCXBCOHISTORICODESCRIC',prop:'Title'},{ctrl:'TRANSACAOCXBCOCCUSTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCOCCUSTOID","Title")',ctrl:'TRANSACAOCXBCOCCUSTOID',prop:'Title'},{ctrl:'TRANSACAOCXBCONATUREZAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCXBCONATUREZAID","Title")',ctrl:'TRANSACAOCXBCONATUREZAID',prop:'Title'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV26NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[{av:'AV19PTransacaoCxBcoSigla',fld:'vPTRANSACAOCXBCOSIGLA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV16TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV21TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17TransacaoCxBcoCCustoId',fld:'vTRANSACAOCXBCOCCUSTOID'},{av:'AV18TransacaoCxBcoNaturezaId',fld:'vTRANSACAOCXBCONATUREZAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV16TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV21TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17TransacaoCxBcoCCustoId',fld:'vTRANSACAOCXBCOCCUSTOID'},{av:'AV18TransacaoCxBcoNaturezaId',fld:'vTRANSACAOCXBCONATUREZAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27Pagina',fld:'vPAGINA'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV16TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV21TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17TransacaoCxBcoCCustoId',fld:'vTRANSACAOCXBCOCCUSTOID'},{av:'AV18TransacaoCxBcoNaturezaId',fld:'vTRANSACAOCXBCONATUREZAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV16TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV21TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17TransacaoCxBcoCCustoId',fld:'vTRANSACAOCXBCOCCUSTOID'},{av:'AV18TransacaoCxBcoNaturezaId',fld:'vTRANSACAOCXBCONATUREZAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV16TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV21TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17TransacaoCxBcoCCustoId',fld:'vTRANSACAOCXBCOCCUSTOID'},{av:'AV18TransacaoCxBcoNaturezaId',fld:'vTRANSACAOCXBCONATUREZAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TransacaoCxBcoSigla',fld:'vTRANSACAOCXBCOSIGLA'},{av:'AV16TransacaoCxBcoDescricao',fld:'vTRANSACAOCXBCODESCRICAO'},{av:'AV21TransacaoCxBcoHistoricoId',fld:'vTRANSACAOCXBCOHISTORICOID'},{av:'AV17TransacaoCxBcoCCustoId',fld:'vTRANSACAOCXBCOCCUSTOID'},{av:'AV18TransacaoCxBcoNaturezaId',fld:'vTRANSACAOCXBCONATUREZAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setPrompt("PROMPT_TRANSACAOCXBCOHISTORICOID", [23]);
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19PTransacaoCxBcoSigla", "vPTRANSACAOCXBCOSIGLA", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatransacaocxbco());
