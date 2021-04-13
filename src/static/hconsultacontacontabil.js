/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:4.8
*/
gx.evt.autoSkip = false;
gx.define('hconsultacontacontabil', false, function () {
   this.ServerClass =  "hconsultacontacontabil" ;
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
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A65ContaContabilSituacao=gx.fn.getControlValue("CONTACONTABILSITUACAO") ;
      this.A64ContaContabilTradutor=gx.fn.getIntegerValue("CONTACONTABILTRADUTOR",'.') ;
      this.AV55ContaContabilSelecao=gx.fn.getControlValue("vCONTACONTABILSELECAO") ;
      this.AV22PContaContabilId=gx.fn.getControlValue("vPCONTACONTABILID") ;
      this.AV28PContaContabilTradutor=gx.fn.getIntegerValue("vPCONTACONTABILTRADUTOR",'.') ;
      this.AV56ContaContabilIdIN=gx.fn.getControlValue("vCONTACONTABILIDIN") ;
   };
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e220y2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hcontacontabilsuperior",[this.A176EmpresaContaContabilEmpresaId, this.A62ContaContabilId]), []);
      this.refreshOutputs([]);
   };
   this.e180y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e110y2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e120y2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e130y2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e140y2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e150y2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e160y2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e210y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e230y1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,40,43,46,48,50,52,54,55,56,57,58,59,60,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacontacontabil",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(62,29,"CONTACONTABILID","","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],62,"ContaContabilId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contacontabiltradutorgrid",30,"vCONTACONTABILTRADUTORGRID","Tradutor","","ContaContabilTradutorGrid","char",0,"px",9,9,"left",null,[],"Contacontabiltradutorgrid","ContaContabilTradutorGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(63,31,"CONTACONTABILNOME","","","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],63,"ContaContabilNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsituacao","vBMPSITUACAO",32,0,"px",17,"px",null,"","Sit","Image","");
   GridContainer.addBitmap("&Bmpsup","vBMPSUP",33,0,"px",17,"px","e220y2_client","","Sup","Image","");
   GridContainer.addSingleLineEdit(176,34,"EMPRESACONTACONTABILEMPRESAID","Código Empresa Conta Contabil","","EmpresaContaContabilEmpresaId","char",0,"px",10,10,"left",null,[],176,"EmpresaContaContabilEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV15ContaContabilId",gxold:"OV15ContaContabilId",gxvar:"AV15ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ContaContabilId=Value},v2z:function(Value){gx.O.ZV15ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV15ContaContabilId,0)},c2v:function(){gx.O.AV15ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILNOME",gxz:"ZV17ContaContabilNome",gxold:"OV17ContaContabilNome",gxvar:"AV17ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ContaContabilNome=Value},v2z:function(Value){gx.O.ZV17ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV17ContaContabilNome,0)},c2v:function(){gx.O.AV17ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV16ContaContabilTradutor",gxold:"OV16ContaContabilTradutor",gxvar:"AV16ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV16ContaContabilTradutor,0)},c2v:function(){gx.O.AV16ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(28),gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORGRID",gxz:"ZV36ContaContabilTradutorGrid",gxold:"OV36ContaContabilTradutorGrid",gxvar:"AV36ContaContabilTradutorGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV36ContaContabilTradutorGrid=Value},v2z:function(Value){gx.O.ZV36ContaContabilTradutorGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILTRADUTORGRID",row || gx.fn.currentGridRowImpl(28),gx.O.AV36ContaContabilTradutorGrid,0)},c2v:function(){gx.O.AV36ContaContabilTradutorGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILTRADUTORGRID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(28),gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSITUACAO",gxz:"ZV14bmpSituacao",gxold:"OV14bmpSituacao",gxvar:"AV14bmpSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14bmpSituacao=Value},v2z:function(Value){gx.O.ZV14bmpSituacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSITUACAO",row || gx.fn.currentGridRowImpl(28),gx.O.AV14bmpSituacao,gx.O.AV62Bmpsituacao_GXI)},c2v:function(){gx.O.AV62Bmpsituacao_GXI=this.val_GXI();gx.O.AV14bmpSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSITUACAO",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSITUACAO_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV62Bmpsituacao_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUP",gxz:"ZV52BmpSup",gxold:"OV52BmpSup",gxvar:"AV52BmpSup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV52BmpSup=Value},v2z:function(Value){gx.O.ZV52BmpSup=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUP",row || gx.fn.currentGridRowImpl(28),gx.O.AV52BmpSup,gx.O.AV61Bmpsup_GXI)},c2v:function(){gx.O.AV61Bmpsup_GXI=this.val_GXI();gx.O.AV52BmpSup=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUP",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUP_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV61Bmpsup_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACONTACONTABILEMPRESAID",gxz:"Z176EmpresaContaContabilEmpresaId",gxold:"O176EmpresaContaContabilEmpresaId",gxvar:"A176EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A176EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.Z176EmpresaContaContabilEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A176EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.A176EmpresaContaContabilEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLENAV",grid:0};
   GXValidFnc[43]={fld:"IMAGE1",grid:0};
   GXValidFnc[46]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[54]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILIDAUX",gxz:"ZV42ContaContabilIdAux",gxold:"OV42ContaContabilIdAux",gxvar:"AV42ContaContabilIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ContaContabilIdAux=Value},v2z:function(Value){gx.O.ZV42ContaContabilIdAux=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDAUX",gx.O.AV42ContaContabilIdAux,0)},c2v:function(){gx.O.AV42ContaContabilIdAux=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDAUX")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"JS", format:2,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV32ChamaOnBlurMascara",gxold:"OV32ChamaOnBlurMascara",gxvar:"AV32ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV32ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV32ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV32ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV50Pagina",gxold:"OV50Pagina",gxvar:"AV50Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV50Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV50Pagina)},c2v:function(){gx.O.AV50Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV49PaginaAux",gxold:"OV49PaginaAux",gxvar:"AV49PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV49PaginaAux,0)},c2v:function(){gx.O.AV49PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV15ContaContabilId = "" ;
   this.ZV15ContaContabilId = "" ;
   this.OV15ContaContabilId = "" ;
   this.AV17ContaContabilNome = "" ;
   this.ZV17ContaContabilNome = "" ;
   this.OV17ContaContabilNome = "" ;
   this.AV16ContaContabilTradutor = 0 ;
   this.ZV16ContaContabilTradutor = 0 ;
   this.OV16ContaContabilTradutor = 0 ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.ZV36ContaContabilTradutorGrid = "" ;
   this.OV36ContaContabilTradutorGrid = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.ZV14bmpSituacao = "" ;
   this.OV14bmpSituacao = "" ;
   this.ZV52BmpSup = "" ;
   this.OV52BmpSup = "" ;
   this.Z176EmpresaContaContabilEmpresaId = "" ;
   this.O176EmpresaContaContabilEmpresaId = "" ;
   this.AV42ContaContabilIdAux = "" ;
   this.ZV42ContaContabilIdAux = "" ;
   this.OV42ContaContabilIdAux = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV32ChamaOnBlurMascara = "" ;
   this.ZV32ChamaOnBlurMascara = "" ;
   this.OV32ChamaOnBlurMascara = "" ;
   this.AV50Pagina = 0 ;
   this.ZV50Pagina = 0 ;
   this.OV50Pagina = 0 ;
   this.AV49PaginaAux = 0 ;
   this.ZV49PaginaAux = 0 ;
   this.OV49PaginaAux = 0 ;
   this.AV15ContaContabilId = "" ;
   this.AV17ContaContabilNome = "" ;
   this.AV16ContaContabilTradutor = 0 ;
   this.AV42ContaContabilIdAux = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV5Orderedby = 0 ;
   this.AV32ChamaOnBlurMascara = "" ;
   this.AV50Pagina = 0 ;
   this.AV49PaginaAux = 0 ;
   this.AV22PContaContabilId = "" ;
   this.AV28PContaContabilTradutor = 0 ;
   this.AV56ContaContabilIdIN = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A65ContaContabilSituacao = "" ;
   this.A62ContaContabilId = "" ;
   this.AV36ContaContabilTradutorGrid = "" ;
   this.A63ContaContabilNome = "" ;
   this.AV14bmpSituacao = "" ;
   this.AV52BmpSup = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.AV55ContaContabilSelecao = "" ;
   this.Events = {"e180y2_client": ["ENTER", true] ,"e110y2_client": ["'GXM_FIRST'", true] ,"e120y2_client": ["'GXM_PREVIOUS'", true] ,"e130y2_client": ["'GXM_NEXT'", true] ,"e140y2_client": ["'GXM_LAST'", true] ,"e150y2_client": ["'PROCURAR'", true] ,"e160y2_client": ["'NOVO'", true] ,"e210y2_client": ["'ATUALIZAPAGINA'", true] ,"e230y1_client": ["CANCEL", true] ,"e220y2_client": ["'SUPERIOR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV15ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV16ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV57SnParametro',fld:'vSNPARAMETRO'},{ctrl:'CONTACONTABILID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTACONTABILID","Title")',ctrl:'CONTACONTABILID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CONTACONTABILNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTACONTABILNOME","Title")',ctrl:'CONTACONTABILNOME',prop:'Title'},{av:'AV49PaginaAux',fld:'vPAGINAAUX'},{av:'AV58NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'}],[{av:'AV22PContaContabilId',fld:'vPCONTACONTABILID'},{av:'AV28PContaContabilTradutor',fld:'vPCONTACONTABILTRADUTOR'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'}],[{av:'AV14bmpSituacao',fld:'vBMPSITUACAO'},{av:'gx.fn.getCtrlProperty("vBMPSITUACAO","Tooltiptext")',ctrl:'vBMPSITUACAO',prop:'Tooltiptext'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'gx.fn.getCtrlProperty("CONTACONTABILID","Backcolor")',ctrl:'CONTACONTABILID',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTORGRID","Backcolor")',ctrl:'vCONTACONTABILTRADUTORGRID',prop:'Backcolor'},{av:'gx.fn.getCtrlProperty("CONTACONTABILNOME","Backcolor")',ctrl:'CONTACONTABILNOME',prop:'Backcolor'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'}],[{av:'AV57SnParametro',fld:'vSNPARAMETRO'},{av:'AV50Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'},{av:'AV50Pagina',fld:'vPAGINA'}],[{av:'AV57SnParametro',fld:'vSNPARAMETRO'},{av:'AV50Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV49PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV57SnParametro',fld:'vSNPARAMETRO'},{av:'AV50Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'},{av:'AV49PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV57SnParametro',fld:'vSNPARAMETRO'},{av:'AV50Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'},{av:'AV16ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV15ContaContabilId',fld:'vCONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV51n',fld:'vN'}],[{av:'AV57SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV50Pagina',fld:'vPAGINA'},{av:'AV51n',fld:'vN'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33ErrDsc',fld:'vERRDSC'},{av:'AV11Tabela',fld:'vTABELA'},{av:'AV43Cont',fld:'vCONT'},{av:'AV15ContaContabilId',fld:'vCONTACONTABILID'}]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'}],[]];
   this.EvtParms["'SUPERIOR'"] = [[{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV42ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV52BmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV36ContaContabilTradutorGrid',fld:'vCONTACONTABILTRADUTORGRID'},{av:'AV55ContaContabilSelecao',fld:'vCONTACONTABILSELECAO'}],[]];
   this.setVCMap("A65ContaContabilSituacao", "CONTACONTABILSITUACAO", 0, "char");
   this.setVCMap("A64ContaContabilTradutor", "CONTACONTABILTRADUTOR", 0, "int");
   this.setVCMap("AV55ContaContabilSelecao", "vCONTACONTABILSELECAO", 0, "svchar");
   this.setVCMap("AV22PContaContabilId", "vPCONTACONTABILID", 0, "svchar");
   this.setVCMap("AV28PContaContabilTradutor", "vPCONTACONTABILTRADUTOR", 0, "int");
   this.setVCMap("AV56ContaContabilIdIN", "vCONTACONTABILIDIN", 0, "svchar");
   this.setVCMap("A65ContaContabilSituacao", "CONTACONTABILSITUACAO", 0, "char");
   this.setVCMap("A64ContaContabilTradutor", "CONTACONTABILTRADUTOR", 0, "int");
   this.setVCMap("AV55ContaContabilSelecao", "vCONTACONTABILSELECAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV52BmpSup", rfrProp:"Value", gxAttId:"Bmpsup"});
   GridContainer.addRefreshingVar({rfrVar:"AV52BmpSup", rfrProp:"Tooltiptext", gxAttId:"Bmpsup"});
   GridContainer.addRefreshingVar({rfrVar:"A65ContaContabilSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A64ContaContabilTradutor"});
   GridContainer.addRefreshingVar({rfrVar:"A62ContaContabilId", rfrProp:"Value", gxAttId:"62"});
   GridContainer.addRefreshingVar({rfrVar:"AV36ContaContabilTradutorGrid", rfrProp:"Value", gxAttId:"Contacontabiltradutorgrid"});
   GridContainer.addRefreshingVar({rfrVar:"AV55ContaContabilSelecao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacontacontabil());
