/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:9.79
*/
gx.evt.autoSkip = false;
gx.define('gx00e0', false, function () {
   this.ServerClass =  "gx00e0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pEmpresaContaContabilEmpresaId=gx.fn.getControlValue("vPEMPRESACONTACONTABILEMPRESAID") ;
      this.AV14pContaContabilId=gx.fn.getControlValue("vPCONTACONTABILID") ;
   };
   this.Validv_Ccontacontabilsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCONTACONTABILSITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cContaContabilSituacao == "I" || this.AV10cContaContabilSituacao == "A" || (""==this.AV10cContaContabilSituacao) ) )
         {
            try {
               gxballoon.setError("Campo cContaContabilSituacao fora do intervalo");
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
   this.Validv_Ccontacontabilnatureza=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCONTACONTABILNATUREZA");
         this.AnyError  = 0;
         if ( ! ( this.AV11cContaContabilNatureza == "N" || this.AV11cContaContabilNatureza == "C" || this.AV11cContaContabilNatureza == "D" || (""==this.AV11cContaContabilNatureza) ) )
         {
            try {
               gxballoon.setError("Campo cContaContabilNatureza fora do intervalo");
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
   this.Validv_Ccontacontabiltipolancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCONTACONTABILTIPOLANCAMENTO");
         this.AnyError  = 0;
         if ( ! ( this.AV12cContaContabilTipoLancamento == "C" || this.AV12cContaContabilTipoLancamento == "E" || this.AV12cContaContabilTipoLancamento == "N" || (""==this.AV12cContaContabilTipoLancamento) ) )
         {
            try {
               gxballoon.setError("Campo cContaContabilTipoLancamento fora do intervalo");
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
   this.e131hm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hm1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00e0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(176,53,"EMPRESACONTACONTABILEMPRESAID","Código Empresa Conta Contabil","","EmpresaContaContabilEmpresaId","char",0,"px",10,10,"left",null,[],176,"EmpresaContaContabilEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(62,54,"CONTACONTABILID","Código","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],62,"ContaContabilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(63,55,"CONTACONTABILNOME","Descrição da Conta Contabil","Selecionar","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],63,"ContaContabilNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(65,56,"CONTACONTABILSITUACAO","Situação","Situação","ContaContabilSituacao","char","A","I",null,true,false,0,"px","");
   Grid1Container.addComboBox(168,57,"CONTACONTABILTIPOCONTA","Tipo da Conta","ContaContabilTipoConta","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESACONTACONTABILEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESACONTACONTABILEMPRESAID",gxz:"ZV6cEmpresaContaContabilEmpresaId",gxold:"OV6cEmpresaContaContabilEmpresaId",gxvar:"AV6cEmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESACONTACONTABILEMPRESAID",gx.O.AV6cEmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONTACONTABILID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILID",gxz:"ZV7cContaContabilId",gxold:"OV7cContaContabilId",gxvar:"AV7cContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cContaContabilId=Value},v2z:function(Value){gx.O.ZV7cContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCCONTACONTABILID",gx.O.AV7cContaContabilId,0)},c2v:function(){gx.O.AV7cContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONTACONTABILNOME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILNOME",gxz:"ZV8cContaContabilNome",gxold:"OV8cContaContabilNome",gxvar:"AV8cContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cContaContabilNome=Value},v2z:function(Value){gx.O.ZV8cContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCCONTACONTABILNOME",gx.O.AV8cContaContabilNome,0)},c2v:function(){gx.O.AV8cContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONTACONTABILSUPERIOR", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILSUPERIOR",gxz:"ZV9cContaContabilSuperior",gxold:"OV9cContaContabilSuperior",gxvar:"AV9cContaContabilSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cContaContabilSuperior=Value},v2z:function(Value){gx.O.ZV9cContaContabilSuperior=Value},v2c:function(){gx.fn.setControlValue("vCCONTACONTABILSUPERIOR",gx.O.AV9cContaContabilSuperior,0)},c2v:function(){gx.O.AV9cContaContabilSuperior=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILSUPERIOR")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCONTACONTABILSITUACAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontacontabilsituacao,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILSITUACAO",gxz:"ZV10cContaContabilSituacao",gxold:"OV10cContaContabilSituacao",gxvar:"AV10cContaContabilSituacao",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV10cContaContabilSituacao=Value},v2z:function(Value){gx.O.ZV10cContaContabilSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vCCONTACONTABILSITUACAO",gx.O.AV10cContaContabilSituacao,"A")},c2v:function(){gx.O.AV10cContaContabilSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILSITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[37]={fld:"TEXTBLOCKCONTACONTABILNATUREZA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontacontabilnatureza,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILNATUREZA",gxz:"ZV11cContaContabilNatureza",gxold:"OV11cContaContabilNatureza",gxvar:"AV11cContaContabilNatureza",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cContaContabilNatureza=Value},v2z:function(Value){gx.O.ZV11cContaContabilNatureza=Value},v2c:function(){gx.fn.setComboBoxValue("vCCONTACONTABILNATUREZA",gx.O.AV11cContaContabilNatureza)},c2v:function(){gx.O.AV11cContaContabilNatureza=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILNATUREZA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCONTACONTABILTIPOLANCAMENTO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontacontabiltipolancamento,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILTIPOLANCAMENTO",gxz:"ZV12cContaContabilTipoLancamento",gxold:"OV12cContaContabilTipoLancamento",gxvar:"AV12cContaContabilTipoLancamento",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12cContaContabilTipoLancamento=Value},v2z:function(Value){gx.O.ZV12cContaContabilTipoLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("vCCONTACONTABILTIPOLANCAMENTO",gx.O.AV12cContaContabilTipoLancamento)},c2v:function(){gx.O.AV12cContaContabilTipoLancamento=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILTIPOLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACONTACONTABILEMPRESAID",gxz:"Z176EmpresaContaContabilEmpresaId",gxold:"O176EmpresaContaContabilEmpresaId",gxvar:"A176EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A176EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.Z176EmpresaContaContabilEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A176EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.A176EmpresaContaContabilEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(51),gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(51),gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILSITUACAO",gxz:"Z65ContaContabilSituacao",gxold:"O65ContaContabilSituacao",gxvar:"A65ContaContabilSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A65ContaContabilSituacao=Value},v2z:function(Value){gx.O.Z65ContaContabilSituacao=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CONTACONTABILSITUACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A65ContaContabilSituacao,"A");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A65ContaContabilSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILSITUACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILTIPOCONTA",gxz:"Z168ContaContabilTipoConta",gxold:"O168ContaContabilTipoConta",gxvar:"A168ContaContabilTipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A168ContaContabilTipoConta=Value},v2z:function(Value){gx.O.Z168ContaContabilTipoConta=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTACONTABILTIPOCONTA",row || gx.fn.currentGridRowImpl(51),gx.O.A168ContaContabilTipoConta);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A168ContaContabilTipoConta=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILTIPOCONTA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaContaContabilEmpresaId = "" ;
   this.ZV6cEmpresaContaContabilEmpresaId = "" ;
   this.OV6cEmpresaContaContabilEmpresaId = "" ;
   this.AV7cContaContabilId = "" ;
   this.ZV7cContaContabilId = "" ;
   this.OV7cContaContabilId = "" ;
   this.AV8cContaContabilNome = "" ;
   this.ZV8cContaContabilNome = "" ;
   this.OV8cContaContabilNome = "" ;
   this.AV9cContaContabilSuperior = "" ;
   this.ZV9cContaContabilSuperior = "" ;
   this.OV9cContaContabilSuperior = "" ;
   this.AV10cContaContabilSituacao = "" ;
   this.ZV10cContaContabilSituacao = "" ;
   this.OV10cContaContabilSituacao = "" ;
   this.AV11cContaContabilNatureza = "" ;
   this.ZV11cContaContabilNatureza = "" ;
   this.OV11cContaContabilNatureza = "" ;
   this.AV12cContaContabilTipoLancamento = "" ;
   this.ZV12cContaContabilTipoLancamento = "" ;
   this.OV12cContaContabilTipoLancamento = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z176EmpresaContaContabilEmpresaId = "" ;
   this.O176EmpresaContaContabilEmpresaId = "" ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.Z65ContaContabilSituacao = "" ;
   this.O65ContaContabilSituacao = "" ;
   this.Z168ContaContabilTipoConta = "" ;
   this.O168ContaContabilTipoConta = "" ;
   this.AV6cEmpresaContaContabilEmpresaId = "" ;
   this.AV7cContaContabilId = "" ;
   this.AV8cContaContabilNome = "" ;
   this.AV9cContaContabilSuperior = "" ;
   this.AV10cContaContabilSituacao = "" ;
   this.AV11cContaContabilNatureza = "" ;
   this.AV12cContaContabilTipoLancamento = "" ;
   this.AV13pEmpresaContaContabilEmpresaId = "" ;
   this.AV14pContaContabilId = "" ;
   this.A167ContaContabilTipoLancamento = "" ;
   this.A166ContaContabilNatureza = "" ;
   this.A165ContaContabilSuperior = "" ;
   this.AV5LinkSelection = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A65ContaContabilSituacao = "" ;
   this.A168ContaContabilTipoConta = "" ;
   this.Events = {"e131hm2_client": ["ENTER", true] ,"e141hm1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaContaContabilEmpresaId',fld:'vCEMPRESACONTACONTABILEMPRESAID'},{av:'AV7cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV8cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV9cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV10cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV11cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV12cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'}],[{av:'AV13pEmpresaContaContabilEmpresaId',fld:'vPEMPRESACONTACONTABILEMPRESAID'},{av:'AV14pContaContabilId',fld:'vPCONTACONTABILID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaContaContabilEmpresaId',fld:'vCEMPRESACONTACONTABILEMPRESAID'},{av:'AV7cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV8cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV9cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV10cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV11cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV12cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaContaContabilEmpresaId',fld:'vCEMPRESACONTACONTABILEMPRESAID'},{av:'AV7cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV8cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV9cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV10cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV11cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV12cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaContaContabilEmpresaId',fld:'vCEMPRESACONTACONTABILEMPRESAID'},{av:'AV7cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV8cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV9cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV10cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV11cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV12cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaContaContabilEmpresaId',fld:'vCEMPRESACONTACONTABILEMPRESAID'},{av:'AV7cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV8cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV9cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV10cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV11cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV12cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'}],[]];
   this.setVCMap("AV13pEmpresaContaContabilEmpresaId", "vPEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV14pContaContabilId", "vPCONTACONTABILID", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00e0());
