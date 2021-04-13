/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:45.29
*/
gx.evt.autoSkip = false;
gx.define('haparelhoitemordemservico', false, function () {
   this.ServerClass =  "haparelhoitemordemservico" ;
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
      this.AV37EquipamentoDes=gx.fn.getControlValue("vEQUIPAMENTODES") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV32AparelhoEmpresaIdGrid=gx.fn.getControlValue("vAPARELHOEMPRESAIDGRID") ;
      this.AV33AparelhoIdGrid=gx.fn.getIntegerValue("vAPARELHOIDGRID",'.') ;
   };
   this.Valid_Aparelhoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("APARELHOID", gx.fn.currentGridRowImpl(54));
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
   this.Valid_Aparelhoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("APARELHOEMPRESAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("APARELHOID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("APARELHOEMPRESAID", gx.fn.currentGridRowImpl(54));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111bv2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121bv2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171bv2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131bv2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141bv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151bv2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161bv2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e211bv2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e221bv2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e231bv2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241bv2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251bv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261bv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,24,29,32,35,37,39,41,43,45,48,50,51,55,56,57,58,59,60,61,62,63,69,70,72,73];
   this.GXLastCtrlId =73;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"haparelhoitemordemservico",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8880,55,"APARELHOITEMID","","","AparelhoItemId","int",0,"px",4,4,"right",null,[],8880,"AparelhoItemId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8876,56,"APARELHOITEMDESCRICAO","","","AparelhoItemDescricao","svchar",0,"px",30,30,"left",null,[],8876,"AparelhoItemDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Aparelhodescricaogrid",57,"vAPARELHODESCRICAOGRID","","","AparelhoDescricaoGrid","svchar",0,"px",40,40,"left",null,[],"Aparelhodescricaogrid","AparelhoDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e211bv2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e221bv2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e231bv2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8825,61,"APARELHOID","","","AparelhoId","int",0,"px",4,4,"right",null,[],8825,"AparelhoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8824,62,"APARELHOEMPRESAID","Código Empresa do Aparelho","","AparelhoEmpresaId","char",0,"px",10,10,"left",null,[],8824,"AparelhoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8821,63,"APARELHODESCRICAO","Descrição","","AparelhoDescricao","svchar",0,"px",40,40,"left",null,[],8821,"AparelhoDescricao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOITEMID",gxz:"ZV27AparelhoItemId",gxold:"OV27AparelhoItemId",gxvar:"AV27AparelhoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27AparelhoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27AparelhoItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOITEMID",gx.O.AV27AparelhoItemId,0)},c2v:function(){gx.O.AV27AparelhoItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOITEMDESCRICAO",gxz:"ZV28AparelhoItemDescricao",gxold:"OV28AparelhoItemDescricao",gxvar:"AV28AparelhoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AparelhoItemDescricao=Value},v2z:function(Value){gx.O.ZV28AparelhoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOITEMDESCRICAO",gx.O.AV28AparelhoItemDescricao,0)},c2v:function(){gx.O.AV28AparelhoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"APARELHO", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOID",gxz:"ZV29AparelhoId",gxold:"OV29AparelhoId",gxvar:"AV29AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29AparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOID",gx.O.AV29AparelhoId,0)},c2v:function(){gx.O.AV29AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV30AparelhoDescricao",gxold:"OV30AparelhoDescricao",gxvar:"AV30AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV30AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV30AparelhoDescricao,0)},c2v:function(){gx.O.AV30AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE4",grid:0};
   GXValidFnc[32]={fld:"TABLE8",grid:0};
   GXValidFnc[35]={fld:"IMAGE2",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"IMAGE1",grid:0};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMID",gxz:"Z8880AparelhoItemId",gxold:"O8880AparelhoItemId",gxvar:"A8880AparelhoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8880AparelhoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8880AparelhoItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(54),gx.O.A8880AparelhoItemId,0)},c2v:function(){gx.O.A8880AparelhoItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOITEMID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOITEMDESCRICAO",gxz:"Z8876AparelhoItemDescricao",gxold:"O8876AparelhoItemDescricao",gxvar:"A8876AparelhoItemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8876AparelhoItemDescricao=Value},v2z:function(Value){gx.O.Z8876AparelhoItemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(54),gx.O.A8876AparelhoItemDescricao,0)},c2v:function(){gx.O.A8876AparelhoItemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOITEMDESCRICAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAOGRID",gxz:"ZV31AparelhoDescricaoGrid",gxold:"OV31AparelhoDescricaoGrid",gxvar:"AV31AparelhoDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31AparelhoDescricaoGrid=Value},v2z:function(Value){gx.O.ZV31AparelhoDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vAPARELHODESCRICAOGRID",row || gx.fn.currentGridRowImpl(54),gx.O.AV31AparelhoDescricaoGrid,0)},c2v:function(){gx.O.AV31AparelhoDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vAPARELHODESCRICAOGRID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:this.Valid_Aparelhoid,isvalid:null,rgrid:[],fld:"APARELHOID",gxz:"Z8825AparelhoId",gxold:"O8825AparelhoId",gxvar:"A8825AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8825AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8825AparelhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOID",row || gx.fn.currentGridRowImpl(54),gx.O.A8825AparelhoId,0)},c2v:function(){gx.O.A8825AparelhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:this.Valid_Aparelhoempresaid,isvalid:null,rgrid:[],fld:"APARELHOEMPRESAID",gxz:"Z8824AparelhoEmpresaId",gxold:"O8824AparelhoEmpresaId",gxvar:"A8824AparelhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8824AparelhoEmpresaId=Value},v2z:function(Value){gx.O.Z8824AparelhoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOEMPRESAID",row || gx.fn.currentGridRowImpl(54),gx.O.A8824AparelhoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8824AparelhoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOEMPRESAID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODESCRICAO",gxz:"Z8821AparelhoDescricao",gxold:"O8821AparelhoDescricao",gxvar:"A8821AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8821AparelhoDescricao=Value},v2z:function(Value){gx.O.Z8821AparelhoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHODESCRICAO",row || gx.fn.currentGridRowImpl(54),gx.O.A8821AparelhoDescricao,0)},c2v:function(){gx.O.A8821AparelhoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHODESCRICAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"JS", format:2,grid:0};
   GXValidFnc[73]={fld:"PROMPT_APARELHOID",grid:0};
   this.AV27AparelhoItemId = 0 ;
   this.ZV27AparelhoItemId = 0 ;
   this.OV27AparelhoItemId = 0 ;
   this.AV28AparelhoItemDescricao = "" ;
   this.ZV28AparelhoItemDescricao = "" ;
   this.OV28AparelhoItemDescricao = "" ;
   this.AV29AparelhoId = 0 ;
   this.ZV29AparelhoId = 0 ;
   this.OV29AparelhoId = 0 ;
   this.AV30AparelhoDescricao = "" ;
   this.ZV30AparelhoDescricao = "" ;
   this.OV30AparelhoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8880AparelhoItemId = 0 ;
   this.O8880AparelhoItemId = 0 ;
   this.Z8876AparelhoItemDescricao = "" ;
   this.O8876AparelhoItemDescricao = "" ;
   this.ZV31AparelhoDescricaoGrid = "" ;
   this.OV31AparelhoDescricaoGrid = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8825AparelhoId = 0 ;
   this.O8825AparelhoId = 0 ;
   this.Z8824AparelhoEmpresaId = "" ;
   this.O8824AparelhoEmpresaId = "" ;
   this.Z8821AparelhoDescricao = "" ;
   this.O8821AparelhoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27AparelhoItemId = 0 ;
   this.AV28AparelhoItemDescricao = "" ;
   this.AV29AparelhoId = 0 ;
   this.AV30AparelhoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.A8879AparelhoItemEmpresaId = "" ;
   this.A8880AparelhoItemId = 0 ;
   this.A8876AparelhoItemDescricao = "" ;
   this.AV31AparelhoDescricaoGrid = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8825AparelhoId = 0 ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8821AparelhoDescricao = "" ;
   this.AV37EquipamentoDes = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.AV41Pgmname = "" ;
   this.AV32AparelhoEmpresaIdGrid = "" ;
   this.AV33AparelhoIdGrid = 0 ;
   this.Events = {"e111bv2_client": ["'ANTERIOR'", true] ,"e121bv2_client": ["'PROXIMO'", true] ,"e171bv2_client": ["VPAGINA.CLICK", true] ,"e131bv2_client": ["'NOVO'", true] ,"e141bv2_client": ["'FECHAR'", true] ,"e151bv2_client": ["'IMPRIMIR'", true] ,"e161bv2_client": ["'PROCURAR'", true] ,"e211bv2_client": ["'ALTERAR'", true] ,"e221bv2_client": ["'EXCLUIR'", true] ,"e231bv2_client": ["'CONSULTAR'", true] ,"e241bv2_client": ["'ATUALIZAPAGINA'", true] ,"e251bv2_client": ["ENTER", true] ,"e261bv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37EquipamentoDes',fld:'vEQUIPAMENTODES',hsh:true},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'}],[{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV46GXLvl77',fld:'vGXLVL77'},{av:'AV31AparelhoDescricaoGrid',fld:'vAPARELHODESCRICAOGRID'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37EquipamentoDes',fld:'vEQUIPAMENTODES',hsh:true},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'}],[{ctrl:'APARELHOITEMID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOITEMID","Title")',ctrl:'APARELHOITEMID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'APARELHOITEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOITEMDESCRICAO","Title")',ctrl:'APARELHOITEMDESCRICAO',prop:'Title'},{ctrl:'APARELHOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOID","Title")',ctrl:'APARELHOID',prop:'Title'},{ctrl:'vAPARELHODESCRICAOGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vAPARELHODESCRICAOGRID","Title")',ctrl:'vAPARELHODESCRICAOGRID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37EquipamentoDes',fld:'vEQUIPAMENTODES',hsh:true},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37EquipamentoDes',fld:'vEQUIPAMENTODES',hsh:true},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37EquipamentoDes',fld:'vEQUIPAMENTODES',hsh:true},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV36QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV42Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV36QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37EquipamentoDes',fld:'vEQUIPAMENTODES',hsh:true},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV31AparelhoDescricaoGrid',fld:'vAPARELHODESCRICAOGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV31AparelhoDescricaoGrid',fld:'vAPARELHODESCRICAOGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV31AparelhoDescricaoGrid',fld:'vAPARELHODESCRICAOGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A8880AparelhoItemId',fld:'APARELHOITEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27AparelhoItemId',fld:'vAPARELHOITEMID'},{av:'AV28AparelhoItemDescricao',fld:'vAPARELHOITEMDESCRICAO'},{av:'AV29AparelhoId',fld:'vAPARELHOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37EquipamentoDes',fld:'vEQUIPAMENTODES',hsh:true},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV32AparelhoEmpresaIdGrid',fld:'vAPARELHOEMPRESAIDGRID'},{av:'AV33AparelhoIdGrid',fld:'vAPARELHOIDGRID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'}],[]];
   this.setVCMap("AV37EquipamentoDes", "vEQUIPAMENTODES", 0, "svchar");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV32AparelhoEmpresaIdGrid", "vAPARELHOEMPRESAIDGRID", 0, "char");
   this.setVCMap("AV33AparelhoIdGrid", "vAPARELHOIDGRID", 0, "int");
   this.setVCMap("AV37EquipamentoDes", "vEQUIPAMENTODES", 0, "svchar");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV32AparelhoEmpresaIdGrid", "vAPARELHOEMPRESAIDGRID", 0, "char");
   this.setVCMap("AV33AparelhoIdGrid", "vAPARELHOIDGRID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV37EquipamentoDes"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A8825AparelhoId", rfrProp:"Value", gxAttId:"8825"});
   GridContainer.addRefreshingVar({rfrVar:"A8824AparelhoEmpresaId", rfrProp:"Value", gxAttId:"8824"});
   GridContainer.addRefreshingVar({rfrVar:"AV32AparelhoEmpresaIdGrid"});
   GridContainer.addRefreshingVar({rfrVar:"AV33AparelhoIdGrid"});
   GridContainer.addRefreshingVar({rfrVar:"A8821AparelhoDescricao", rfrProp:"Value", gxAttId:"8821"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new haparelhoitemordemservico());
