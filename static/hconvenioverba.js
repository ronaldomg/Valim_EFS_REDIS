/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:31:21.82
*/
gx.evt.autoSkip = false;
gx.define('hconvenioverba', false, function () {
   this.ServerClass =  "hconvenioverba" ;
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
      this.AV51SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A2724ConvenioVerbaContaTradutor=gx.fn.getIntegerValue("CONVENIOVERBACONTATRADUTOR",'.') ;
   };
   this.Validv_Contacontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezadespesaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZADESPESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convenioverbacontaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVENIOVERBACONTAID", gx.fn.currentGridRowImpl(56));
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
   this.Valid_Convenioverbanatdesid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVENIOVERBANATDESID", gx.fn.currentGridRowImpl(56));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacontacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezadespesaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZADESPESAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11fp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12fp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16fp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13fp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14fp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15fp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19fp2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20fp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21fp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23fp2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24fp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25fp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,21,22,25,27,28,33,36,39,41,43,45,47,50,52,53,57,58,59,60,61,62,63,64,65,66,72,73,75,76,77,78,79];
   this.GXLastCtrlId =79;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconvenioverba",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2091,57,"CONVENIOVERBACONTAID","","","ConvenioVerbaContaId","svchar",0,"px",30,30,"left",null,[],2091,"ConvenioVerbaContaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2092,58,"CONVENIOVERBACONTANOME","","","ConvenioVerbaContaNome","svchar",0,"px",45,45,"left",null,[],2092,"ConvenioVerbaContaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contacontabiltradutor",59,"vCONTACONTABILTRADUTOR","","","ContaContabilTradutor","svchar",0,"px",7,7,"left",null,[],"Contacontabiltradutor","ContaContabilTradutor",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2094,60,"CONVENIOVERBANATDESID","","","ConvenioVerbaNatDesId","int",0,"px",8,8,"right",null,[],2094,"ConvenioVerbaNatDesId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2095,61,"CONVENIOVERBANATDESDESCRICAO","","","ConvenioVerbaNatDesDescricao","svchar",0,"px",40,40,"left",null,[],2095,"ConvenioVerbaNatDesDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Snpatrimonio",62,"vSNPATRIMONIO","Patrimônio","","SnPatrimonio","char",0,"px",3,3,"left",null,[],"Snpatrimonio","SnPatrimonio",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3090,63,"CONVENIOVERBASNPATRIMONIO","Patrimônio","","ConvenioVerbaSnPatrimonio","char",0,"px",1,1,"left",null,[],3090,"ConvenioVerbaSnPatrimonio",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px","e19fp2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px","e20fp2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px","e21fp2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV28ConvenioDescricao",gxold:"OV28ConvenioDescricao",gxvar:"AV28ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV28ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV28ConvenioDescricao,0)},c2v:function(){gx.O.AV28ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilid,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILID",gxz:"ZV39ContaContabilId",gxold:"OV39ContaContabilId",gxvar:"AV39ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ContaContabilId=Value},v2z:function(Value){gx.O.ZV39ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV39ContaContabilId,0)},c2v:function(){gx.O.AV39ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"IMGCCONT",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV34Tradutor",gxold:"OV34Tradutor",gxvar:"AV34Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34Tradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34Tradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR",gx.O.AV34Tradutor,0)},c2v:function(){gx.O.AV34Tradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV49ContaContabilNome",gxold:"OV49ContaContabilNome",gxvar:"AV49ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49ContaContabilNome=Value},v2z:function(Value){gx.O.ZV49ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV49ContaContabilNome,0)},c2v:function(){gx.O.AV49ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezadespesaid,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESPESAID",gxz:"ZV40NaturezaDespesaId",gxold:"OV40NaturezaDespesaId",gxvar:"AV40NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40NaturezaDespesaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESAID",gx.O.AV40NaturezaDespesaId,0)},c2v:function(){gx.O.AV40NaturezaDespesaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATUREZADESPESAID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV45NaturezaDespesaDescricao",gxold:"OV45NaturezaDespesaDescricao",gxvar:"AV45NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV45NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV45NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV45NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE6",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:this.Valid_Convenioverbacontaid,isvalid:null,rgrid:[],fld:"CONVENIOVERBACONTAID",gxz:"Z2091ConvenioVerbaContaId",gxold:"O2091ConvenioVerbaContaId",gxvar:"A2091ConvenioVerbaContaId",ucs:[],op:[58,61],ip:[58,61,57,60],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2091ConvenioVerbaContaId=Value},v2z:function(Value){gx.O.Z2091ConvenioVerbaContaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOVERBACONTAID",row || gx.fn.currentGridRowImpl(56),gx.O.A2091ConvenioVerbaContaId,0)},c2v:function(){gx.O.A2091ConvenioVerbaContaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOVERBACONTAID",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVERBACONTANOME",gxz:"Z2092ConvenioVerbaContaNome",gxold:"O2092ConvenioVerbaContaNome",gxvar:"A2092ConvenioVerbaContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2092ConvenioVerbaContaNome=Value},v2z:function(Value){gx.O.Z2092ConvenioVerbaContaNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOVERBACONTANOME",row || gx.fn.currentGridRowImpl(56),gx.O.A2092ConvenioVerbaContaNome,0)},c2v:function(){gx.O.A2092ConvenioVerbaContaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOVERBACONTANOME",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:7,dec:0,sign:false,ro:0,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV35ContaContabilTradutor",gxold:"OV35ContaContabilTradutor",gxvar:"AV35ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35ContaContabilTradutor=Value},v2z:function(Value){gx.O.ZV35ContaContabilTradutor=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(56),gx.O.AV35ContaContabilTradutor,0)},c2v:function(){gx.O.AV35ContaContabilTradutor=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:this.Valid_Convenioverbanatdesid,isvalid:null,rgrid:[],fld:"CONVENIOVERBANATDESID",gxz:"Z2094ConvenioVerbaNatDesId",gxold:"O2094ConvenioVerbaNatDesId",gxvar:"A2094ConvenioVerbaNatDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2094ConvenioVerbaNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2094ConvenioVerbaNatDesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOVERBANATDESID",row || gx.fn.currentGridRowImpl(56),gx.O.A2094ConvenioVerbaNatDesId,0)},c2v:function(){gx.O.A2094ConvenioVerbaNatDesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOVERBANATDESID",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVERBANATDESDESCRICAO",gxz:"Z2095ConvenioVerbaNatDesDescricao",gxold:"O2095ConvenioVerbaNatDesDescricao",gxvar:"A2095ConvenioVerbaNatDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2095ConvenioVerbaNatDesDescricao=Value},v2z:function(Value){gx.O.Z2095ConvenioVerbaNatDesDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOVERBANATDESDESCRICAO",row || gx.fn.currentGridRowImpl(56),gx.O.A2095ConvenioVerbaNatDesDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2095ConvenioVerbaNatDesDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOVERBANATDESDESCRICAO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:0,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNPATRIMONIO",gxz:"ZV50SnPatrimonio",gxold:"OV50SnPatrimonio",gxvar:"AV50SnPatrimonio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV50SnPatrimonio=Value},v2z:function(Value){gx.O.ZV50SnPatrimonio=Value},v2c:function(row){gx.fn.setGridControlValue("vSNPATRIMONIO",row || gx.fn.currentGridRowImpl(56),gx.O.AV50SnPatrimonio,0)},c2v:function(){gx.O.AV50SnPatrimonio=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNPATRIMONIO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVERBASNPATRIMONIO",gxz:"Z3090ConvenioVerbaSnPatrimonio",gxold:"O3090ConvenioVerbaSnPatrimonio",gxvar:"A3090ConvenioVerbaSnPatrimonio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3090ConvenioVerbaSnPatrimonio=Value},v2z:function(Value){gx.O.Z3090ConvenioVerbaSnPatrimonio=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOVERBASNPATRIMONIO",row || gx.fn.currentGridRowImpl(56),gx.O.A3090ConvenioVerbaSnPatrimonio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3090ConvenioVerbaSnPatrimonio=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOVERBASNPATRIMONIO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(56),gx.O.AV7bmpAlt,gx.O.AV56Bmpalt_GXI)},c2v:function(){gx.O.AV56Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV56Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV57Bmpexc_GXI)},c2v:function(){gx.O.AV57Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV57Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(56),gx.O.AV16bmpCon,gx.O.AV58Bmpcon_GXI)},c2v:function(){gx.O.AV58Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV58Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV32ChamaOnBlurMascara",gxold:"OV32ChamaOnBlurMascara",gxvar:"AV32ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV32ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV32ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV32ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARAC",gxz:"ZV42QtCarac",gxold:"OV42QtCarac",gxvar:"AV42QtCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42QtCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42QtCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARAC",gx.O.AV42QtCarac,0)},c2v:function(){gx.O.AV42QtCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARAC",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"JS", format:2,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacontacontabilempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESACONTACONTABILEMPRESAID",gxz:"ZV48EmpresaContaContabilEmpresaId",gxold:"OV48EmpresaContaContabilEmpresaId",gxvar:"AV48EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV48EmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONTACONTABILEMPRESAID",gx.O.AV48EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV48EmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezadespesaempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESPESAEMPRESAID",gxz:"ZV41NaturezaDespesaEmpresaId",gxold:"OV41NaturezaDespesaEmpresaId",gxvar:"AV41NaturezaDespesaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41NaturezaDespesaEmpresaId=Value},v2z:function(Value){gx.O.ZV41NaturezaDespesaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESAEMPRESAID",gx.O.AV41NaturezaDespesaEmpresaId,0)},c2v:function(){gx.O.AV41NaturezaDespesaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"PROMPT_NATUREZADESPESAID",grid:0};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.ZV28ConvenioDescricao = "" ;
   this.OV28ConvenioDescricao = "" ;
   this.AV39ContaContabilId = "" ;
   this.ZV39ContaContabilId = "" ;
   this.OV39ContaContabilId = "" ;
   this.AV34Tradutor = 0 ;
   this.ZV34Tradutor = 0 ;
   this.OV34Tradutor = 0 ;
   this.AV49ContaContabilNome = "" ;
   this.ZV49ContaContabilNome = "" ;
   this.OV49ContaContabilNome = "" ;
   this.AV40NaturezaDespesaId = 0 ;
   this.ZV40NaturezaDespesaId = 0 ;
   this.OV40NaturezaDespesaId = 0 ;
   this.AV45NaturezaDespesaDescricao = "" ;
   this.ZV45NaturezaDespesaDescricao = "" ;
   this.OV45NaturezaDespesaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2091ConvenioVerbaContaId = "" ;
   this.O2091ConvenioVerbaContaId = "" ;
   this.Z2092ConvenioVerbaContaNome = "" ;
   this.O2092ConvenioVerbaContaNome = "" ;
   this.ZV35ContaContabilTradutor = "" ;
   this.OV35ContaContabilTradutor = "" ;
   this.Z2094ConvenioVerbaNatDesId = 0 ;
   this.O2094ConvenioVerbaNatDesId = 0 ;
   this.Z2095ConvenioVerbaNatDesDescricao = "" ;
   this.O2095ConvenioVerbaNatDesDescricao = "" ;
   this.ZV50SnPatrimonio = "" ;
   this.OV50SnPatrimonio = "" ;
   this.Z3090ConvenioVerbaSnPatrimonio = "" ;
   this.O3090ConvenioVerbaSnPatrimonio = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV32ChamaOnBlurMascara = "" ;
   this.ZV32ChamaOnBlurMascara = "" ;
   this.OV32ChamaOnBlurMascara = "" ;
   this.AV42QtCarac = 0 ;
   this.ZV42QtCarac = 0 ;
   this.OV42QtCarac = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV48EmpresaContaContabilEmpresaId = "" ;
   this.ZV48EmpresaContaContabilEmpresaId = "" ;
   this.OV48EmpresaContaContabilEmpresaId = "" ;
   this.AV41NaturezaDespesaEmpresaId = "" ;
   this.ZV41NaturezaDespesaEmpresaId = "" ;
   this.OV41NaturezaDespesaEmpresaId = "" ;
   this.AV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.AV39ContaContabilId = "" ;
   this.AV34Tradutor = 0 ;
   this.AV49ContaContabilNome = "" ;
   this.AV40NaturezaDespesaId = 0 ;
   this.AV45NaturezaDespesaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV32ChamaOnBlurMascara = "" ;
   this.AV42QtCarac = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV48EmpresaContaContabilEmpresaId = "" ;
   this.AV41NaturezaDespesaEmpresaId = "" ;
   this.A2724ConvenioVerbaContaTradutor = 0 ;
   this.A2090ConvenioVerbaContaEmpId = "" ;
   this.A2093ConvenioVerbaNatDesEmpId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2091ConvenioVerbaContaId = "" ;
   this.A2092ConvenioVerbaContaNome = "" ;
   this.AV35ContaContabilTradutor = "" ;
   this.A2094ConvenioVerbaNatDesId = 0 ;
   this.A2095ConvenioVerbaNatDesDescricao = "" ;
   this.AV50SnPatrimonio = "" ;
   this.A3090ConvenioVerbaSnPatrimonio = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV51SnRecuperaFiltro = "" ;
   this.Events = {"e11fp2_client": ["'ANTERIOR'", true] ,"e12fp2_client": ["'PROXIMO'", true] ,"e16fp2_client": ["VPAGINA.CLICK", true] ,"e13fp2_client": ["'NOVO'", true] ,"e14fp2_client": ["'FECHAR'", true] ,"e15fp2_client": ["'PROCURAR'", true] ,"e19fp2_client": ["'ALTERAR'", true] ,"e20fp2_client": ["'EXCLUIR'", true] ,"e21fp2_client": ["'CONSULTAR'", true] ,"e23fp2_client": ["'ATUALIZAPAGINA'", true] ,"e24fp2_client": ["ENTER", true] ,"e25fp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV41NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV41NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'}],[{ctrl:'CONVENIOVERBACONTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOVERBACONTAID","Title")',ctrl:'CONVENIOVERBACONTAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONVENIOVERBACONTANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOVERBACONTANOME","Title")',ctrl:'CONVENIOVERBACONTANOME',prop:'Title'},{ctrl:'CONVENIOVERBANATDESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOVERBANATDESID","Title")',ctrl:'CONVENIOVERBANATDESID',prop:'Title'},{ctrl:'CONVENIOVERBANATDESDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOVERBANATDESDESCRICAO","Title")',ctrl:'CONVENIOVERBANATDESDESCRICAO',prop:'Title'},{ctrl:'vCONTACONTABILTRADUTOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTOR","Title")',ctrl:'vCONTACONTABILTRADUTOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV41NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV41NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV41NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV41NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'A2077NaturezaDespesaDescricao',fld:'NATUREZADESPESADESCRICAO'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV59GXLvl273',fld:'vGXLVL273'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV60GXLvl282',fld:'vGXLVL282'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV49ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV45NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2094ConvenioVerbaNatDesId',fld:'CONVENIOVERBANATDESID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'}],[{av:'AV50SnPatrimonio',fld:'vSNPATRIMONIO'},{av:'AV35ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV36Digito',fld:'vDIGITO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV40NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV41NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3090ConvenioVerbaSnPatrimonio',fld:'CONVENIOVERBASNPATRIMONIO'},{av:'A2724ConvenioVerbaContaTradutor',fld:'CONVENIOVERBACONTATRADUTOR'}],[]];
   this.setPrompt("IMGCCONT", [19,21]);
   this.setPrompt("PROMPT_NATUREZADESPESAID", [27]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV51SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2724ConvenioVerbaContaTradutor", "CONVENIOVERBACONTATRADUTOR", 0, "int");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV51SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2724ConvenioVerbaContaTradutor", "CONVENIOVERBACONTATRADUTOR", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV51SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A3090ConvenioVerbaSnPatrimonio", rfrProp:"Value", gxAttId:"3090"});
   GridContainer.addRefreshingVar({rfrVar:"A2724ConvenioVerbaContaTradutor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconvenioverba());
