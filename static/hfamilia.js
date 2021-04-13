/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:7.86
*/
gx.evt.autoSkip = false;
gx.define('hfamilia', false, function () {
   this.ServerClass =  "hfamilia" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Setorid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(57) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SETORID", gx.fn.currentGridRowImpl(57));
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
   this.Valid_Setorempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(57) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SETOREMPRESAID", gx.fn.currentGridRowImpl(57));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e25o61_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hrelatoriofamilia",[]), []);
      this.refreshOutputs([]);
   };
   this.e11o62_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12o62_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16o62_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13o62_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14o62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15o62_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19o62_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20o62_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21o62_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22o62_client=function()
   {
      this.executeServerEvent("'DUPLICARFAMILIA'", true, arguments[0], false, false);
   };
   this.e23o62_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26o62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27o62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,24,26,27,32,35,38,40,42,44,46,48,51,53,54,58,59,60,61,62,63,64,65,66,67,73,75,76,77];
   this.GXLastCtrlId =77;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hfamilia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2957,58,"FAMILIAID","","","FamiliaId","char",0,"px",15,15,"left",null,[],2957,"FamiliaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2951,59,"FAMILIADESCRICAO","","","FamiliaDescricao","svchar",0,"px",30,30,"left",null,[],2951,"FamiliaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2953,60,"SETORID","","","SetorId","char",0,"px",15,15,"left",null,[],2953,"SetorId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2958,61,"SETORDESCRICAO","","","SetorDescricao","svchar",0,"px",30,30,"left",null,[],2958,"SetorDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpdup","vBMPDUP",62,0,"px",17,"px","e22o62_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px","e19o62_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px","e20o62_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px","e21o62_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(2956,66,"FAMILIAEMPRESAID","Empresa Família","","FamiliaEmpresaId","char",0,"px",10,10,"left",null,[],2956,"FamiliaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2952,67,"SETOREMPRESAID","Empresa Setor","","SetorEmpresaId","char",0,"px",10,10,"left",null,[],2952,"SetorEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TABLE9",grid:0};
   GXValidFnc[14]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFAMILIAID",gxz:"ZV27FamiliaId",gxold:"OV27FamiliaId",gxvar:"AV27FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FamiliaId=Value},v2z:function(Value){gx.O.ZV27FamiliaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV27FamiliaId,0)},c2v:function(){gx.O.AV27FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFAMILIADESCRICAO",gxz:"ZV28FamiliaDescricao",gxold:"OV28FamiliaDescricao",gxvar:"AV28FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FamiliaDescricao=Value},v2z:function(Value){gx.O.ZV28FamiliaDescricao=Value},v2c:function(){gx.fn.setControlValue("vFAMILIADESCRICAO",gx.O.AV28FamiliaDescricao,0)},c2v:function(){gx.O.AV28FamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSETORID",gxz:"ZV29SetorId",gxold:"OV29SetorId",gxvar:"AV29SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29SetorId=Value},v2z:function(Value){gx.O.ZV29SetorId=Value},v2c:function(){gx.fn.setControlValue("vSETORID",gx.O.AV29SetorId,0)},c2v:function(){gx.O.AV29SetorId=this.val()},val:function(){return gx.fn.getControlValue("vSETORID")},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORDESCRICAO",gxz:"ZV32SetorDescricao",gxold:"OV32SetorDescricao",gxvar:"AV32SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SetorDescricao=Value},v2z:function(Value){gx.O.ZV32SetorDescricao=Value},v2c:function(){gx.fn.setControlValue("vSETORDESCRICAO",gx.O.AV32SetorDescricao,0)},c2v:function(){gx.O.AV32SetorDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSETORDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   GXValidFnc[35]={fld:"TABLE8",grid:0};
   GXValidFnc[38]={fld:"IMAGE2",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"IMAGE1",grid:0};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   GXValidFnc[48]={fld:"TABLE5",grid:0};
   GXValidFnc[51]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAID",gxz:"Z2957FamiliaId",gxold:"O2957FamiliaId",gxvar:"A2957FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2957FamiliaId=Value},v2z:function(Value){gx.O.Z2957FamiliaId=Value},v2c:function(row){gx.fn.setGridControlValue("FAMILIAID",row || gx.fn.currentGridRowImpl(57),gx.O.A2957FamiliaId,0)},c2v:function(){gx.O.A2957FamiliaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FAMILIAID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIADESCRICAO",gxz:"Z2951FamiliaDescricao",gxold:"O2951FamiliaDescricao",gxvar:"A2951FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2951FamiliaDescricao=Value},v2z:function(Value){gx.O.Z2951FamiliaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("FAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.A2951FamiliaDescricao,0)},c2v:function(){gx.O.A2951FamiliaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("FAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:this.Valid_Setorid,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2953SetorId=Value},v2z:function(Value){gx.O.Z2953SetorId=Value},v2c:function(row){gx.fn.setGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(57),gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SETORDESCRICAO",gxz:"Z2958SetorDescricao",gxold:"O2958SetorDescricao",gxvar:"A2958SetorDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2958SetorDescricao=Value},v2z:function(Value){gx.O.Z2958SetorDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.A2958SetorDescricao,0)},c2v:function(){gx.O.A2958SetorDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORDESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUP",gxz:"ZV35bmpDup",gxold:"OV35bmpDup",gxvar:"AV35bmpDup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35bmpDup=Value},v2z:function(Value){gx.O.ZV35bmpDup=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUP",row || gx.fn.currentGridRowImpl(57),gx.O.AV35bmpDup,gx.O.AV46Bmpdup_GXI)},c2v:function(){gx.O.AV46Bmpdup_GXI=this.val_GXI();gx.O.AV35bmpDup=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUP",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUP_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV46Bmpdup_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(57),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(57),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FAMILIAEMPRESAID",gxz:"Z2956FamiliaEmpresaId",gxold:"O2956FamiliaEmpresaId",gxvar:"A2956FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2956FamiliaEmpresaId=Value},v2z:function(Value){gx.O.Z2956FamiliaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FAMILIAEMPRESAID",row || gx.fn.currentGridRowImpl(57),gx.O.A2956FamiliaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2956FamiliaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FAMILIAEMPRESAID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:this.Valid_Setorempresaid,isvalid:null,rgrid:[],fld:"SETOREMPRESAID",gxz:"Z2952SetorEmpresaId",gxold:"O2952SetorEmpresaId",gxvar:"A2952SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2952SetorEmpresaId=Value},v2z:function(Value){gx.O.Z2952SetorEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SETOREMPRESAID",row || gx.fn.currentGridRowImpl(57),gx.O.A2952SetorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2952SetorEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETOREMPRESAID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSETOREMPRESAID",gxz:"ZV33SetorEmpresaId",gxold:"OV33SetorEmpresaId",gxvar:"AV33SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SetorEmpresaId=Value},v2z:function(Value){gx.O.ZV33SetorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSETOREMPRESAID",gx.O.AV33SetorEmpresaId,0)},c2v:function(){gx.O.AV33SetorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSETOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"JS", format:2,grid:0};
   GXValidFnc[77]={fld:"PROMPT_SETORID",grid:0};
   this.AV27FamiliaId = "" ;
   this.ZV27FamiliaId = "" ;
   this.OV27FamiliaId = "" ;
   this.AV28FamiliaDescricao = "" ;
   this.ZV28FamiliaDescricao = "" ;
   this.OV28FamiliaDescricao = "" ;
   this.AV29SetorId = "" ;
   this.ZV29SetorId = "" ;
   this.OV29SetorId = "" ;
   this.AV32SetorDescricao = "" ;
   this.ZV32SetorDescricao = "" ;
   this.OV32SetorDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2957FamiliaId = "" ;
   this.O2957FamiliaId = "" ;
   this.Z2951FamiliaDescricao = "" ;
   this.O2951FamiliaDescricao = "" ;
   this.Z2953SetorId = "" ;
   this.O2953SetorId = "" ;
   this.Z2958SetorDescricao = "" ;
   this.O2958SetorDescricao = "" ;
   this.ZV35bmpDup = "" ;
   this.OV35bmpDup = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z2956FamiliaEmpresaId = "" ;
   this.O2956FamiliaEmpresaId = "" ;
   this.Z2952SetorEmpresaId = "" ;
   this.O2952SetorEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV33SetorEmpresaId = "" ;
   this.ZV33SetorEmpresaId = "" ;
   this.OV33SetorEmpresaId = "" ;
   this.AV27FamiliaId = "" ;
   this.AV28FamiliaDescricao = "" ;
   this.AV29SetorId = "" ;
   this.AV32SetorDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33SetorEmpresaId = "" ;
   this.A2957FamiliaId = "" ;
   this.A2951FamiliaDescricao = "" ;
   this.A2953SetorId = "" ;
   this.A2958SetorDescricao = "" ;
   this.AV35bmpDup = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2952SetorEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.AV41Pgmname = "" ;
   this.Events = {"e11o62_client": ["'ANTERIOR'", true] ,"e12o62_client": ["'PROXIMO'", true] ,"e16o62_client": ["VPAGINA.CLICK", true] ,"e13o62_client": ["'NOVO'", true] ,"e14o62_client": ["'FECHAR'", true] ,"e15o62_client": ["'PROCURAR'", true] ,"e19o62_client": ["'ALTERAR'", true] ,"e20o62_client": ["'EXCLUIR'", true] ,"e21o62_client": ["'CONSULTAR'", true] ,"e22o62_client": ["'DUPLICARFAMILIA'", true] ,"e23o62_client": ["'ATUALIZAPAGINA'", true] ,"e26o62_client": ["ENTER", true] ,"e27o62_client": ["CANCEL", true] ,"e25o61_client": ["'IMPRIMIR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{ctrl:'GRID',prop:'Rows'}],[{ctrl:'FAMILIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FAMILIAID","Title")',ctrl:'FAMILIAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'FAMILIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FAMILIADESCRICAO","Title")',ctrl:'FAMILIADESCRICAO',prop:'Title'},{ctrl:'SETORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SETORID","Title")',ctrl:'SETORID',prop:'Title'},{ctrl:'SETORDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SETORDESCRICAO","Title")',ctrl:'SETORDESCRICAO',prop:'Title'},{av:'AV36QtdRegistrosGrid',fld:'vQTDREGISTROSGRID'},{av:'AV37QtdPaginas',fld:'vQTDPAGINAS'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICARFAMILIA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32SetorDescricao',fld:'vSETORDESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FamiliaId',fld:'vFAMILIAID'},{av:'AV28FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV29SetorId',fld:'vSETORID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33SetorEmpresaId',fld:'vSETOREMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpDup',fld:'vBMPDUP'},{av:'gx.fn.getCtrlProperty("vBMPDUP","Tooltiptext")',ctrl:'vBMPDUP',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.setPrompt("PROMPT_SETORID", [26]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpDup", rfrProp:"Value", gxAttId:"Bmpdup"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpDup", rfrProp:"Tooltiptext", gxAttId:"Bmpdup"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfamilia());
