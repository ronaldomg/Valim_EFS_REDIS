/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:55.2
*/
gx.evt.autoSkip = false;
gx.define('gx00e1', false, function () {
   this.ServerClass =  "gx00e1" ;
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
      this.AV12pEmpresaContaContabilEmpresaId=gx.fn.getControlValue("vPEMPRESACONTACONTABILEMPRESAID") ;
      this.AV13pContaContabilId=gx.fn.getControlValue("vPCONTACONTABILID") ;
   };
   this.Validv_Ccontacontabilsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCONTACONTABILSITUACAO");
         this.AnyError  = 0;
         if ( ! ( this.AV9cContaContabilSituacao == "I" || this.AV9cContaContabilSituacao == "A" || (""==this.AV9cContaContabilSituacao) ) )
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
         if ( ! ( this.AV10cContaContabilNatureza == "N" || this.AV10cContaContabilNatureza == "C" || this.AV10cContaContabilNatureza == "D" || (""==this.AV10cContaContabilNatureza) ) )
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
         if ( ! ( this.AV11cContaContabilTipoLancamento == "C" || this.AV11cContaContabilTipoLancamento == "E" || this.AV11cContaContabilTipoLancamento == "N" || (""==this.AV11cContaContabilTipoLancamento) ) )
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
   this.e131kj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00e1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(62,48,"CONTACONTABILID","Código","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],62,"ContaContabilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(63,49,"CONTACONTABILNOME","Descrição da Conta Contabil","Selecionar","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],63,"ContaContabilNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(165,50,"CONTACONTABILSUPERIOR","Conta Contabil Superior","","ContaContabilSuperior","svchar",0,"px",30,30,"left",null,[],165,"ContaContabilSuperior",true,0,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox(65,51,"CONTACONTABILSITUACAO","Situação","Situação","ContaContabilSituacao","char","A","I",null,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(821,52,"CONTACONTABILUSUARIOID","Usuário","","ContaContabilUsuarioId","char",0,"px",12,12,"left",null,[],821,"ContaContabilUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(176,53,"EMPRESACONTACONTABILEMPRESAID","Código Empresa Conta Contabil","","EmpresaContaContabilEmpresaId","char",0,"px",10,10,"left",null,[],176,"EmpresaContaContabilEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCONTACONTABILID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILID",gxz:"ZV6cContaContabilId",gxold:"OV6cContaContabilId",gxvar:"AV6cContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cContaContabilId=Value},v2z:function(Value){gx.O.ZV6cContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCCONTACONTABILID",gx.O.AV6cContaContabilId,0)},c2v:function(){gx.O.AV6cContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONTACONTABILNOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILNOME",gxz:"ZV7cContaContabilNome",gxold:"OV7cContaContabilNome",gxvar:"AV7cContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cContaContabilNome=Value},v2z:function(Value){gx.O.ZV7cContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCCONTACONTABILNOME",gx.O.AV7cContaContabilNome,0)},c2v:function(){gx.O.AV7cContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONTACONTABILSUPERIOR", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILSUPERIOR",gxz:"ZV8cContaContabilSuperior",gxold:"OV8cContaContabilSuperior",gxvar:"AV8cContaContabilSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cContaContabilSuperior=Value},v2z:function(Value){gx.O.ZV8cContaContabilSuperior=Value},v2c:function(){gx.fn.setControlValue("vCCONTACONTABILSUPERIOR",gx.O.AV8cContaContabilSuperior,0)},c2v:function(){gx.O.AV8cContaContabilSuperior=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILSUPERIOR")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONTACONTABILSITUACAO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontacontabilsituacao,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILSITUACAO",gxz:"ZV9cContaContabilSituacao",gxold:"OV9cContaContabilSituacao",gxvar:"AV9cContaContabilSituacao",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV9cContaContabilSituacao=Value},v2z:function(Value){gx.O.ZV9cContaContabilSituacao=Value},v2c:function(){gx.fn.setCheckBoxValue("vCCONTACONTABILSITUACAO",gx.O.AV9cContaContabilSituacao,"A")},c2v:function(){gx.O.AV9cContaContabilSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILSITUACAO")},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[32]={fld:"TEXTBLOCKCONTACONTABILNATUREZA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontacontabilnatureza,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILNATUREZA",gxz:"ZV10cContaContabilNatureza",gxold:"OV10cContaContabilNatureza",gxvar:"AV10cContaContabilNatureza",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cContaContabilNatureza=Value},v2z:function(Value){gx.O.ZV10cContaContabilNatureza=Value},v2c:function(){gx.fn.setComboBoxValue("vCCONTACONTABILNATUREZA",gx.O.AV10cContaContabilNatureza)},c2v:function(){gx.O.AV10cContaContabilNatureza=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILNATUREZA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCONTACONTABILTIPOLANCAMENTO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccontacontabiltipolancamento,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTACONTABILTIPOLANCAMENTO",gxz:"ZV11cContaContabilTipoLancamento",gxold:"OV11cContaContabilTipoLancamento",gxvar:"AV11cContaContabilTipoLancamento",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cContaContabilTipoLancamento=Value},v2z:function(Value){gx.O.ZV11cContaContabilTipoLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("vCCONTACONTABILTIPOLANCAMENTO",gx.O.AV11cContaContabilTipoLancamento)},c2v:function(){gx.O.AV11cContaContabilTipoLancamento=this.val()},val:function(){return gx.fn.getControlValue("vCCONTACONTABILTIPOLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(46),gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(46),gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILSUPERIOR",gxz:"Z165ContaContabilSuperior",gxold:"O165ContaContabilSuperior",gxvar:"A165ContaContabilSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A165ContaContabilSuperior=Value},v2z:function(Value){gx.O.Z165ContaContabilSuperior=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILSUPERIOR",row || gx.fn.currentGridRowImpl(46),gx.O.A165ContaContabilSuperior,0)},c2v:function(){gx.O.A165ContaContabilSuperior=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILSUPERIOR",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILSITUACAO",gxz:"Z65ContaContabilSituacao",gxold:"O65ContaContabilSituacao",gxvar:"A65ContaContabilSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A65ContaContabilSituacao=Value},v2z:function(Value){gx.O.Z65ContaContabilSituacao=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CONTACONTABILSITUACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A65ContaContabilSituacao,"A");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A65ContaContabilSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILSITUACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn,values:['A','I']};
   GXValidFnc[52]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILUSUARIOID",gxz:"Z821ContaContabilUsuarioId",gxold:"O821ContaContabilUsuarioId",gxvar:"A821ContaContabilUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A821ContaContabilUsuarioId=Value},v2z:function(Value){gx.O.Z821ContaContabilUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILUSUARIOID",row || gx.fn.currentGridRowImpl(46),gx.O.A821ContaContabilUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A821ContaContabilUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILUSUARIOID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACONTACONTABILEMPRESAID",gxz:"Z176EmpresaContaContabilEmpresaId",gxold:"O176EmpresaContaContabilEmpresaId",gxvar:"A176EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A176EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.Z176EmpresaContaContabilEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A176EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.A176EmpresaContaContabilEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cContaContabilId = "" ;
   this.ZV6cContaContabilId = "" ;
   this.OV6cContaContabilId = "" ;
   this.AV7cContaContabilNome = "" ;
   this.ZV7cContaContabilNome = "" ;
   this.OV7cContaContabilNome = "" ;
   this.AV8cContaContabilSuperior = "" ;
   this.ZV8cContaContabilSuperior = "" ;
   this.OV8cContaContabilSuperior = "" ;
   this.AV9cContaContabilSituacao = "" ;
   this.ZV9cContaContabilSituacao = "" ;
   this.OV9cContaContabilSituacao = "" ;
   this.AV10cContaContabilNatureza = "" ;
   this.ZV10cContaContabilNatureza = "" ;
   this.OV10cContaContabilNatureza = "" ;
   this.AV11cContaContabilTipoLancamento = "" ;
   this.ZV11cContaContabilTipoLancamento = "" ;
   this.OV11cContaContabilTipoLancamento = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.Z165ContaContabilSuperior = "" ;
   this.O165ContaContabilSuperior = "" ;
   this.Z65ContaContabilSituacao = "" ;
   this.O65ContaContabilSituacao = "" ;
   this.Z821ContaContabilUsuarioId = "" ;
   this.O821ContaContabilUsuarioId = "" ;
   this.Z176EmpresaContaContabilEmpresaId = "" ;
   this.O176EmpresaContaContabilEmpresaId = "" ;
   this.AV6cContaContabilId = "" ;
   this.AV7cContaContabilNome = "" ;
   this.AV8cContaContabilSuperior = "" ;
   this.AV9cContaContabilSituacao = "" ;
   this.AV10cContaContabilNatureza = "" ;
   this.AV11cContaContabilTipoLancamento = "" ;
   this.AV12pEmpresaContaContabilEmpresaId = "" ;
   this.AV13pContaContabilId = "" ;
   this.A167ContaContabilTipoLancamento = "" ;
   this.A166ContaContabilNatureza = "" ;
   this.AV5LinkSelection = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A165ContaContabilSuperior = "" ;
   this.A65ContaContabilSituacao = "" ;
   this.A821ContaContabilUsuarioId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.Events = {"e131kj2_client": ["ENTER", true] ,"e141kj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV7cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV8cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV9cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV10cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV11cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'},{av:'AV12pEmpresaContaContabilEmpresaId',fld:'vPEMPRESACONTACONTABILEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'}],[{av:'AV13pContaContabilId',fld:'vPCONTACONTABILID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV7cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV8cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV9cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV10cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV11cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'},{av:'AV12pEmpresaContaContabilEmpresaId',fld:'vPEMPRESACONTACONTABILEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV7cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV8cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV9cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV10cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV11cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'},{av:'AV12pEmpresaContaContabilEmpresaId',fld:'vPEMPRESACONTACONTABILEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV7cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV8cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV9cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV10cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV11cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'},{av:'AV12pEmpresaContaContabilEmpresaId',fld:'vPEMPRESACONTACONTABILEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaContabilId',fld:'vCCONTACONTABILID'},{av:'AV7cContaContabilNome',fld:'vCCONTACONTABILNOME'},{av:'AV8cContaContabilSuperior',fld:'vCCONTACONTABILSUPERIOR'},{av:'AV9cContaContabilSituacao',fld:'vCCONTACONTABILSITUACAO'},{av:'AV10cContaContabilNatureza',fld:'vCCONTACONTABILNATUREZA'},{av:'AV11cContaContabilTipoLancamento',fld:'vCCONTACONTABILTIPOLANCAMENTO'},{av:'AV12pEmpresaContaContabilEmpresaId',fld:'vPEMPRESACONTACONTABILEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pEmpresaContaContabilEmpresaId", "vPEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV13pContaContabilId", "vPCONTACONTABILID", 0, "svchar");
   this.setVCMap("AV12pEmpresaContaContabilEmpresaId", "vPEMPRESACONTACONTABILEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pEmpresaContaContabilEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00e1());
