/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:39:29.27
*/
gx.evt.autoSkip = false;
gx.define('hacessosistema', false, function () {
   this.ServerClass =  "hacessosistema" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Empresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Sistemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSISTEMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Programaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROGRAMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sistemaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(54));
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
   this.Valid_Programaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sistemaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Programaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROGRAMAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Sistemaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SISTEMAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11hh2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12hh2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13hh2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14hh2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15hh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e16hh2_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", false, null, false, false);
   };
   this.e19hh2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21hh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e22hh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,23,25,26,29,31,32,35,37,40,42,44,47,55,56,57,58,59,60,61,62,63,69,73,76,78,80,82,84,85,86,87,88,89,90,91,93,94,95,96,97];
   this.GXLastCtrlId =97;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hacessosistema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2696,55,"ACESSOSISTEMAEMPRESAID","","","AcessoSistemaEmpresaId","char",0,"px",10,10,"left",null,[],2696,"AcessoSistemaEmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2697,56,"ACESSOSISTEMAUSUARIOID","","","AcessoSistemaUsuarioId","char",0,"px",12,12,"left",null,[],2697,"AcessoSistemaUsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(140,57,"SISTEMAID","","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(145,58,"PROGRAMANOME","","","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2701,59,"ACESSOSISTEMAMODO","","","AcessoSistemaModo","char",0,"px",3,3,"left",null,[],2701,"AcessoSistemaModo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2699,60,"ACESSOSISTEMADATAENTRADA","","","AcessoSistemaDataEntrada","dtime",0,"px",16,16,"right",null,[],2699,"AcessoSistemaDataEntrada",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2700,61,"ACESSOSISTEMADATASAIDA","Data/Hora Saída","","AcessoSistemaDataSaida","dtime",0,"px",16,16,"right",null,[],2700,"AcessoSistemaDataSaida",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2698,62,"ACESSOSISTEMASEQUENCIA","Sequência","","AcessoSistemaSequencia","int",0,"px",8,8,"right",null,[],2698,"AcessoSistemaSequencia",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(141,63,"PROGRAMAID","Código do Programa","","ProgramaId","int",0,"px",4,4,"right",null,[],141,"ProgramaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAID",gxz:"ZV68EmpresaId",gxold:"OV68EmpresaId",gxvar:"AV68EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68EmpresaId=Value},v2z:function(Value){gx.O.ZV68EmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAID",gx.O.AV68EmpresaId,0)},c2v:function(){gx.O.AV68EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANOME",gxz:"ZV74EmpresaNome",gxold:"OV74EmpresaNome",gxvar:"AV74EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74EmpresaNome=Value},v2z:function(Value){gx.O.ZV74EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOME",gx.O.AV74EmpresaNome,0)},c2v:function(){gx.O.AV74EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV66UsuarioId",gxold:"OV66UsuarioId",gxvar:"AV66UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66UsuarioId=Value},v2z:function(Value){gx.O.ZV66UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV66UsuarioId,0)},c2v:function(){gx.O.AV66UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV72UsuarioNome",gxold:"OV72UsuarioNome",gxvar:"AV72UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72UsuarioNome=Value},v2z:function(Value){gx.O.ZV72UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV72UsuarioNome,0)},c2v:function(){gx.O.AV72UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sistemaid,isvalid:null,rgrid:[this.GridContainer],fld:"vSISTEMAID",gxz:"ZV67SistemaId",gxold:"OV67SistemaId",gxvar:"AV67SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67SistemaId=Value},v2z:function(Value){gx.O.ZV67SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV67SistemaId,0)},c2v:function(){gx.O.AV67SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMANOME",gxz:"ZV73SistemaNome",gxold:"OV73SistemaNome",gxvar:"AV73SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73SistemaNome=Value},v2z:function(Value){gx.O.ZV73SistemaNome=Value},v2c:function(){gx.fn.setControlValue("vSISTEMANOME",gx.O.AV73SistemaNome,0)},c2v:function(){gx.O.AV73SistemaNome=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMANOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Programaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMAID",gxz:"ZV69ProgramaId",gxold:"OV69ProgramaId",gxvar:"AV69ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROGRAMAID",gx.O.AV69ProgramaId,0)},c2v:function(){gx.O.AV69ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROGRAMANOME",gxz:"ZV75ProgramaNome",gxold:"OV75ProgramaNome",gxvar:"AV75ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ProgramaNome=Value},v2z:function(Value){gx.O.ZV75ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("vPROGRAMANOME",gx.O.AV75ProgramaNome,0)},c2v:function(){gx.O.AV75ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMANOME")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE10",grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATATELAINI",gxz:"ZV84DataTelaIni",gxold:"OV84DataTelaIni",gxvar:"AV84DataTelaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84DataTelaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV84DataTelaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATATELAINI",gx.O.AV84DataTelaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV84DataTelaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATATELAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATATELAFIM",gxz:"ZV85DataTelaFim",gxold:"OV85DataTelaFim",gxvar:"AV85DataTelaFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85DataTelaFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV85DataTelaFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATATELAFIM",gx.O.AV85DataTelaFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV85DataTelaFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATATELAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNSOMENTEACESSONAOFINALIZADO",gxz:"ZV87snSomenteAcessoNaoFinalizado",gxold:"OV87snSomenteAcessoNaoFinalizado",gxvar:"AV87snSomenteAcessoNaoFinalizado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV87snSomenteAcessoNaoFinalizado=Value},v2z:function(Value){gx.O.ZV87snSomenteAcessoNaoFinalizado=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNSOMENTEACESSONAOFINALIZADO",gx.O.AV87snSomenteAcessoNaoFinalizado,"S")},c2v:function(){gx.O.AV87snSomenteAcessoNaoFinalizado=this.val()},val:function(){return gx.fn.getControlValue("vSNSOMENTEACESSONAOFINALIZADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMAEMPRESAID",gxz:"Z2696AcessoSistemaEmpresaId",gxold:"O2696AcessoSistemaEmpresaId",gxvar:"A2696AcessoSistemaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2696AcessoSistemaEmpresaId=Value},v2z:function(Value){gx.O.Z2696AcessoSistemaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSISTEMAEMPRESAID",row || gx.fn.currentGridRowImpl(54),gx.O.A2696AcessoSistemaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2696AcessoSistemaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSISTEMAEMPRESAID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMAUSUARIOID",gxz:"Z2697AcessoSistemaUsuarioId",gxold:"O2697AcessoSistemaUsuarioId",gxvar:"A2697AcessoSistemaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2697AcessoSistemaUsuarioId=Value},v2z:function(Value){gx.O.Z2697AcessoSistemaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSISTEMAUSUARIOID",row || gx.fn.currentGridRowImpl(54),gx.O.A2697AcessoSistemaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2697AcessoSistemaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSISTEMAUSUARIOID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:this.Valid_Sistemaid,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(54),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(54),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMAMODO",gxz:"Z2701AcessoSistemaModo",gxold:"O2701AcessoSistemaModo",gxvar:"A2701AcessoSistemaModo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2701AcessoSistemaModo=Value},v2z:function(Value){gx.O.Z2701AcessoSistemaModo=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSISTEMAMODO",row || gx.fn.currentGridRowImpl(54),gx.O.A2701AcessoSistemaModo,0)},c2v:function(){gx.O.A2701AcessoSistemaModo=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSISTEMAMODO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMADATAENTRADA",gxz:"Z2699AcessoSistemaDataEntrada",gxold:"O2699AcessoSistemaDataEntrada",gxvar:"A2699AcessoSistemaDataEntrada",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2699AcessoSistemaDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2699AcessoSistemaDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSISTEMADATAENTRADA",row || gx.fn.currentGridRowImpl(54),gx.O.A2699AcessoSistemaDataEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2699AcessoSistemaDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACESSOSISTEMADATAENTRADA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMADATASAIDA",gxz:"Z2700AcessoSistemaDataSaida",gxold:"O2700AcessoSistemaDataSaida",gxvar:"A2700AcessoSistemaDataSaida",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2700AcessoSistemaDataSaida=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2700AcessoSistemaDataSaida=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSISTEMADATASAIDA",row || gx.fn.currentGridRowImpl(54),gx.O.A2700AcessoSistemaDataSaida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2700AcessoSistemaDataSaida=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACESSOSISTEMADATASAIDA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSISTEMASEQUENCIA",gxz:"Z2698AcessoSistemaSequencia",gxold:"O2698AcessoSistemaSequencia",gxvar:"A2698AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2698AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2698AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSISTEMASEQUENCIA",row || gx.fn.currentGridRowImpl(54),gx.O.A2698AcessoSistemaSequencia,0)},c2v:function(){gx.O.A2698AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACESSOSISTEMASEQUENCIA",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:this.Valid_Programaid,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(54),gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TABLE11",grid:0};
   GXValidFnc[73]={fld:"TABLE12",grid:0};
   GXValidFnc[76]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[78]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[80]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[82]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[84]={fld:"IMAGE11",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAACESSOINI",gxz:"ZV70DataAcessoIni",gxold:"OV70DataAcessoIni",gxvar:"AV70DataAcessoIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70DataAcessoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV70DataAcessoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAACESSOINI",gx.O.AV70DataAcessoIni,0)},c2v:function(){gx.O.AV70DataAcessoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAACESSOINI")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNFILTRAGRID",gxz:"ZV83snFiltraGrid",gxold:"OV83snFiltraGrid",gxvar:"AV83snFiltraGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83snFiltraGrid=Value},v2z:function(Value){gx.O.ZV83snFiltraGrid=Value},v2c:function(){gx.fn.setControlValue("vSNFILTRAGRID",gx.O.AV83snFiltraGrid,0)},c2v:function(){gx.O.AV83snFiltraGrid=this.val()},val:function(){return gx.fn.getControlValue("vSNFILTRAGRID")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAACESSOFIM",gxz:"ZV71DataAcessoFim",gxold:"OV71DataAcessoFim",gxvar:"AV71DataAcessoFim",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71DataAcessoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV71DataAcessoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAACESSOFIM",gx.O.AV71DataAcessoFim,0)},c2v:function(){gx.O.AV71DataAcessoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAACESSOFIM")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"JS", format:2,grid:0};
   GXValidFnc[93]={fld:"BTNHELP",grid:0};
   GXValidFnc[94]={fld:"PROMPT_EMPRESAID",grid:0};
   GXValidFnc[95]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[96]={fld:"PROMPT_SISTEMAID",grid:0};
   GXValidFnc[97]={fld:"PROMPT_PROGRAMAID",grid:0};
   this.AV68EmpresaId = "" ;
   this.ZV68EmpresaId = "" ;
   this.OV68EmpresaId = "" ;
   this.AV74EmpresaNome = "" ;
   this.ZV74EmpresaNome = "" ;
   this.OV74EmpresaNome = "" ;
   this.AV66UsuarioId = "" ;
   this.ZV66UsuarioId = "" ;
   this.OV66UsuarioId = "" ;
   this.AV72UsuarioNome = "" ;
   this.ZV72UsuarioNome = "" ;
   this.OV72UsuarioNome = "" ;
   this.AV67SistemaId = "" ;
   this.ZV67SistemaId = "" ;
   this.OV67SistemaId = "" ;
   this.AV73SistemaNome = "" ;
   this.ZV73SistemaNome = "" ;
   this.OV73SistemaNome = "" ;
   this.AV69ProgramaId = 0 ;
   this.ZV69ProgramaId = 0 ;
   this.OV69ProgramaId = 0 ;
   this.AV75ProgramaNome = "" ;
   this.ZV75ProgramaNome = "" ;
   this.OV75ProgramaNome = "" ;
   this.AV84DataTelaIni = gx.date.nullDate() ;
   this.ZV84DataTelaIni = gx.date.nullDate() ;
   this.OV84DataTelaIni = gx.date.nullDate() ;
   this.AV85DataTelaFim = gx.date.nullDate() ;
   this.ZV85DataTelaFim = gx.date.nullDate() ;
   this.OV85DataTelaFim = gx.date.nullDate() ;
   this.AV87snSomenteAcessoNaoFinalizado = "" ;
   this.ZV87snSomenteAcessoNaoFinalizado = "" ;
   this.OV87snSomenteAcessoNaoFinalizado = "" ;
   this.Z2696AcessoSistemaEmpresaId = "" ;
   this.O2696AcessoSistemaEmpresaId = "" ;
   this.Z2697AcessoSistemaUsuarioId = "" ;
   this.O2697AcessoSistemaUsuarioId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.Z2701AcessoSistemaModo = "" ;
   this.O2701AcessoSistemaModo = "" ;
   this.Z2699AcessoSistemaDataEntrada = gx.date.nullDate() ;
   this.O2699AcessoSistemaDataEntrada = gx.date.nullDate() ;
   this.Z2700AcessoSistemaDataSaida = gx.date.nullDate() ;
   this.O2700AcessoSistemaDataSaida = gx.date.nullDate() ;
   this.Z2698AcessoSistemaSequencia = 0 ;
   this.O2698AcessoSistemaSequencia = 0 ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV70DataAcessoIni = gx.date.nullDate() ;
   this.ZV70DataAcessoIni = gx.date.nullDate() ;
   this.OV70DataAcessoIni = gx.date.nullDate() ;
   this.AV83snFiltraGrid = "" ;
   this.ZV83snFiltraGrid = "" ;
   this.OV83snFiltraGrid = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV71DataAcessoFim = gx.date.nullDate() ;
   this.ZV71DataAcessoFim = gx.date.nullDate() ;
   this.OV71DataAcessoFim = gx.date.nullDate() ;
   this.AV68EmpresaId = "" ;
   this.AV74EmpresaNome = "" ;
   this.AV66UsuarioId = "" ;
   this.AV72UsuarioNome = "" ;
   this.AV67SistemaId = "" ;
   this.AV73SistemaNome = "" ;
   this.AV69ProgramaId = 0 ;
   this.AV75ProgramaNome = "" ;
   this.AV84DataTelaIni = gx.date.nullDate() ;
   this.AV85DataTelaFim = gx.date.nullDate() ;
   this.AV87snSomenteAcessoNaoFinalizado = "" ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV70DataAcessoIni = gx.date.nullDate() ;
   this.AV83snFiltraGrid = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV71DataAcessoFim = gx.date.nullDate() ;
   this.A2696AcessoSistemaEmpresaId = "" ;
   this.A2697AcessoSistemaUsuarioId = "" ;
   this.A140SistemaId = "" ;
   this.A145ProgramaNome = "" ;
   this.A2701AcessoSistemaModo = "" ;
   this.A2699AcessoSistemaDataEntrada = gx.date.nullDate() ;
   this.A2700AcessoSistemaDataSaida = gx.date.nullDate() ;
   this.A2698AcessoSistemaSequencia = 0 ;
   this.A141ProgramaId = 0 ;
   this.A539SistemaNome = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.Events = {"e11hh2_client": ["'GXM_FIRST'", true] ,"e12hh2_client": ["'GXM_PREVIOUS'", true] ,"e13hh2_client": ["'GXM_NEXT'", true] ,"e14hh2_client": ["'GXM_LAST'", true] ,"e15hh2_client": ["'FECHAR'", true] ,"e16hh2_client": ["'PESQUISAR'", true] ,"e19hh2_client": ["'ATUALIZAPAGINA'", true] ,"e21hh2_client": ["ENTER", true] ,"e22hh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV69ProgramaId',fld:'vPROGRAMAID'},{av:'AV87snSomenteAcessoNaoFinalizado',fld:'vSNSOMENTEACESSONAOFINALIZADO'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{ctrl:'ACESSOSISTEMAEMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACESSOSISTEMAEMPRESAID","Title")',ctrl:'ACESSOSISTEMAEMPRESAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ACESSOSISTEMAUSUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACESSOSISTEMAUSUARIOID","Title")',ctrl:'ACESSOSISTEMAUSUARIOID',prop:'Title'},{ctrl:'SISTEMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAID","Title")',ctrl:'SISTEMAID',prop:'Title'},{ctrl:'PROGRAMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOME","Title")',ctrl:'PROGRAMANOME',prop:'Title'},{ctrl:'ACESSOSISTEMAMODO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACESSOSISTEMAMODO","Title")',ctrl:'ACESSOSISTEMAMODO',prop:'Title'},{ctrl:'ACESSOSISTEMADATAENTRADA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ACESSOSISTEMADATAENTRADA","Title")',ctrl:'ACESSOSISTEMADATAENTRADA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV69ProgramaId',fld:'vPROGRAMAID'},{av:'AV87snSomenteAcessoNaoFinalizado',fld:'vSNSOMENTEACESSONAOFINALIZADO'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV69ProgramaId',fld:'vPROGRAMAID'},{av:'AV87snSomenteAcessoNaoFinalizado',fld:'vSNSOMENTEACESSONAOFINALIZADO'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV69ProgramaId',fld:'vPROGRAMAID'},{av:'AV87snSomenteAcessoNaoFinalizado',fld:'vSNSOMENTEACESSONAOFINALIZADO'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV69ProgramaId',fld:'vPROGRAMAID'},{av:'AV87snSomenteAcessoNaoFinalizado',fld:'vSNSOMENTEACESSONAOFINALIZADO'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV69ProgramaId',fld:'vPROGRAMAID'},{av:'AV87snSomenteAcessoNaoFinalizado',fld:'vSNSOMENTEACESSONAOFINALIZADO'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV84DataTelaIni',fld:'vDATATELAINI'},{av:'AV85DataTelaFim',fld:'vDATATELAFIM'},{av:'AV82snErro',fld:'vSNERRO'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'A186EmpresaNome',fld:'EMPRESANOME'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A539SistemaNome',fld:'SISTEMANOME'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A145ProgramaNome',fld:'PROGRAMANOME'}],[{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV82snErro',fld:'vSNERRO'},{av:'AV86DataStr',fld:'vDATASTR'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV85DataTelaFim',fld:'vDATATELAFIM'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV74EmpresaNome',fld:'vEMPRESANOME'},{av:'AV72UsuarioNome',fld:'vUSUARIONOME'},{av:'AV73SistemaNome',fld:'vSISTEMANOME'},{av:'AV75ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV103GXLvl193',fld:'vGXLVL193'},{av:'AV104GXLvl206',fld:'vGXLVL206'},{av:'AV105GXLvl219',fld:'vGXLVL219'},{av:'AV106GXLvl237',fld:'vGXLVL237'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV68EmpresaId',fld:'vEMPRESAID'},{av:'AV66UsuarioId',fld:'vUSUARIOID'},{av:'AV67SistemaId',fld:'vSISTEMAID'},{av:'AV69ProgramaId',fld:'vPROGRAMAID'},{av:'AV87snSomenteAcessoNaoFinalizado',fld:'vSNSOMENTEACESSONAOFINALIZADO'},{av:'AV70DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV83snFiltraGrid',fld:'vSNFILTRAGRID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV71DataAcessoFim',fld:'vDATAACESSOFIM'}],[]];
   this.setPrompt("PROMPT_EMPRESAID", [13]);
   this.setPrompt("PROMPT_USUARIOID", [19]);
   this.setPrompt("PROMPT_SISTEMAID", [25]);
   this.setPrompt("PROMPT_PROGRAMAID", [31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hacessosistema());
