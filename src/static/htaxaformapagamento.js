/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:25.17
*/
gx.evt.autoSkip = false;
gx.define('htaxaformapagamento', false, function () {
   this.ServerClass =  "htaxaformapagamento" ;
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
      this.A11278FormaPgtoTaxaId=gx.fn.getIntegerValue("FORMAPGTOTAXAID",'.') ;
      this.A11279FormaPgtoTaxaEmpresaId=gx.fn.getControlValue("FORMAPGTOTAXAEMPRESAID") ;
      this.AV10Udparg1=gx.fn.getControlValue("vUDPARG1") ;
      this.A11280FormaPagamentoValorTaxa=gx.fn.getDecimalValue("FORMAPAGAMENTOVALORTAXA",'.',',') ;
   };
   this.Valid_Formapgtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(5) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FORMAPGTOID", gx.fn.currentGridRowImpl(5));
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
   this.e142di2_client=function()
   {
      this.executeServerEvent("VFORMAPAGAMENTOVALORTAXA.ISVALID", true, arguments[0], false, false);
   };
   this.e112di2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162di2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e172di2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,15];
   this.GXLastCtrlId =15;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"htaxaformapagamento",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(3376,6,"FORMAPGTOID","Código","","FormaPgtoId","int",0,"px",3,3,"right",null,[],3376,"FormaPgtoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3489,7,"FORMAPGTODESCRICAO","Forma de Pagamento","","FormaPgtoDescricao","svchar",0,"px",20,20,"left",null,[],3489,"FormaPgtoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Formapagamentovalortaxa",8,"vFORMAPAGAMENTOVALORTAXA","Valor Taxa","","FormaPagamentoValorTaxa","decimal",0,"px",6,6,"right",null,[],"Formapagamentovalortaxa","FormaPagamentoValorTaxa",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:this.Valid_Formapgtoid,isvalid:null,rgrid:[],fld:"FORMAPGTOID",gxz:"Z3376FormaPgtoId",gxold:"O3376FormaPgtoId",gxvar:"A3376FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3376FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3376FormaPgtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(5),gx.O.A3376FormaPgtoId,0)},c2v:function(){gx.O.A3376FormaPgtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTODESCRICAO",gxz:"Z3489FormaPgtoDescricao",gxold:"O3489FormaPgtoDescricao",gxvar:"A3489FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3489FormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3489FormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A3489FormaPgtoDescricao,0)},c2v:function(){gx.O.A3489FormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:'e142di2_client',rgrid:[],fld:"vFORMAPAGAMENTOVALORTAXA",gxz:"ZV5FormaPagamentoValorTaxa",gxold:"OV5FormaPagamentoValorTaxa",gxvar:"AV5FormaPagamentoValorTaxa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5FormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV5FormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vFORMAPAGAMENTOVALORTAXA",row || gx.fn.currentGridRowImpl(5),gx.O.AV5FormaPagamentoValorTaxa,2,',')},c2v:function(){gx.O.AV5FormaPagamentoValorTaxa=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vFORMAPAGAMENTOVALORTAXA",row || gx.fn.currentGridRowImpl(5),'.',',')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISCLOSING",gxz:"ZV6isClosing",gxold:"OV6isClosing",gxvar:"AV6isClosing",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV6isClosing=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV6isClosing=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISCLOSING",gx.O.AV6isClosing,true)},c2v:function(){gx.O.AV6isClosing=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISCLOSING")},nac:gx.falseFn,values:['true','false']};
   this.Z3376FormaPgtoId = 0 ;
   this.O3376FormaPgtoId = 0 ;
   this.Z3489FormaPgtoDescricao = "" ;
   this.O3489FormaPgtoDescricao = "" ;
   this.ZV5FormaPagamentoValorTaxa = 0 ;
   this.OV5FormaPagamentoValorTaxa = 0 ;
   this.AV6isClosing = false ;
   this.ZV6isClosing = false ;
   this.OV6isClosing = false ;
   this.AV6isClosing = false ;
   this.A3376FormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.AV5FormaPagamentoValorTaxa = 0 ;
   this.A11278FormaPgtoTaxaId = 0 ;
   this.A11279FormaPgtoTaxaEmpresaId = "" ;
   this.A11280FormaPagamentoValorTaxa = 0 ;
   this.AV10Udparg1 = "" ;
   this.Events = {"e142di2_client": ["VFORMAPAGAMENTOVALORTAXA.ISVALID", true] ,"e112di2_client": ["'FECHAR'", true] ,"e162di2_client": ["ENTER", true] ,"e172di2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vFORMAPAGAMENTOVALORTAXA","Enabled")',ctrl:'vFORMAPAGAMENTOVALORTAXA',prop:'Enabled'},{av:'A11278FormaPgtoTaxaId',fld:'FORMAPGTOTAXAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A11279FormaPgtoTaxaEmpresaId',fld:'FORMAPGTOTAXAEMPRESAID'},{av:'AV10Udparg1',fld:'vUDPARG1'},{av:'A11280FormaPagamentoValorTaxa',fld:'FORMAPAGAMENTOVALORTAXA'},{av:'AV6isClosing',fld:'vISCLOSING'}],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A11278FormaPgtoTaxaId',fld:'FORMAPGTOTAXAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A11279FormaPgtoTaxaEmpresaId',fld:'FORMAPGTOTAXAEMPRESAID'},{av:'AV10Udparg1',fld:'vUDPARG1'},{av:'A11280FormaPagamentoValorTaxa',fld:'FORMAPAGAMENTOVALORTAXA'}],[{av:'AV5FormaPagamentoValorTaxa',fld:'vFORMAPAGAMENTOVALORTAXA'}]];
   this.EvtParms["VFORMAPAGAMENTOVALORTAXA.ISVALID"] = [[{av:'AV5FormaPagamentoValorTaxa',fld:'vFORMAPAGAMENTOVALORTAXA'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'}],[{av:'AV5FormaPagamentoValorTaxa',fld:'vFORMAPAGAMENTOVALORTAXA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'gx.fn.getCtrlProperty("vFORMAPAGAMENTOVALORTAXA","Enabled")',ctrl:'vFORMAPAGAMENTOVALORTAXA',prop:'Enabled'},{av:'AV6isClosing',fld:'vISCLOSING'},{av:'A11278FormaPgtoTaxaId',fld:'FORMAPGTOTAXAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A11279FormaPgtoTaxaEmpresaId',fld:'FORMAPGTOTAXAEMPRESAID'},{av:'AV10Udparg1',fld:'vUDPARG1'},{av:'A11280FormaPagamentoValorTaxa',fld:'FORMAPAGAMENTOVALORTAXA'}],[{av:'AV6isClosing',fld:'vISCLOSING'}]];
   this.setVCMap("A11278FormaPgtoTaxaId", "FORMAPGTOTAXAID", 0, "int");
   this.setVCMap("A11279FormaPgtoTaxaEmpresaId", "FORMAPGTOTAXAEMPRESAID", 0, "char");
   this.setVCMap("AV10Udparg1", "vUDPARG1", 0, "char");
   this.setVCMap("A11280FormaPagamentoValorTaxa", "FORMAPAGAMENTOVALORTAXA", 0, "decimal");
   this.setVCMap("A11278FormaPgtoTaxaId", "FORMAPGTOTAXAID", 0, "int");
   this.setVCMap("A11279FormaPgtoTaxaEmpresaId", "FORMAPGTOTAXAEMPRESAID", 0, "char");
   this.setVCMap("AV10Udparg1", "vUDPARG1", 0, "char");
   this.setVCMap("A11280FormaPagamentoValorTaxa", "FORMAPAGAMENTOVALORTAXA", 0, "decimal");
   Grid1Container.addRefreshingVar({rfrVar:"AV5FormaPagamentoValorTaxa", rfrProp:"Enabled", gxAttId:"Formapagamentovalortaxa"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[15]);
   Grid1Container.addRefreshingVar({rfrVar:"A11278FormaPgtoTaxaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3376FormaPgtoId", rfrProp:"Value", gxAttId:"3376"});
   Grid1Container.addRefreshingVar({rfrVar:"A11279FormaPgtoTaxaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10Udparg1"});
   Grid1Container.addRefreshingVar({rfrVar:"A11280FormaPagamentoValorTaxa"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htaxaformapagamento());
