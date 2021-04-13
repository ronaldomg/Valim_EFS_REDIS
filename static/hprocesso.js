/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:8:1.20
*/
gx.evt.autoSkip = false;
gx.define('hprocesso', false, function () {
   this.ServerClass =  "hprocesso" ;
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
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
      this.A1554ProcessoQtdeErros=gx.fn.getIntegerValue("PROCESSOQTDEERROS",'.') ;
   };
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
   this.Valid_Processorotina=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(51) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOROTINA", gx.fn.currentGridRowImpl(51));
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
   this.Valid_Processoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(51) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROCESSOID", gx.fn.currentGridRowImpl(51));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e119x2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e129x2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e209x2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e219x2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e229x2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e169x2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e139x2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e149x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e159x2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e239x2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e249x2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e259x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,45,47,48,52,53,54,55,56,57,58,59,60,61,67,69,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hprocesso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Gridprocessorotina",52,"vGRIDPROCESSOROTINA","Rotina","","GridProcessoRotina","svchar",0,"px",40,40,"left",null,[],"Gridprocessorotina","GridProcessoRotina",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1543,53,"PROCESSOROTINA","","ProcessoRotina","svchar",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(1544,54,"PROCESSOID","","","ProcessoId","int",0,"px",6,6,"right",null,[],1544,"ProcessoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1545,55,"PROCESSODTINICIO","","","ProcessoDtInicio","dtime",0,"px",16,16,"right",null,[],1545,"ProcessoDtInicio",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1546,56,"PROCESSODTTERMINO","","","ProcessoDtTermino","dtime",0,"px",16,16,"right",null,[],1546,"ProcessoDtTermino",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1542,57,"PROCESSOUSUARIONOME","","","ProcessoUsuarioNome","svchar",0,"px",35,35,"left",null,[],1542,"ProcessoUsuarioNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmperr","vBMPERR",58,0,"px",17,"px",null,"","Status","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e209x2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e219x2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e229x2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOROTINA",gxz:"ZV27ProcessoRotina",gxold:"OV27ProcessoRotina",gxvar:"AV27ProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27ProcessoRotina=Value},v2z:function(Value){gx.O.ZV27ProcessoRotina=Value},v2c:function(){gx.fn.setComboBoxValue("vPROCESSOROTINA",gx.O.AV27ProcessoRotina)},c2v:function(){gx.O.AV27ProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOROTINA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE10",grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioid,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV34UsuarioId",gxold:"OV34UsuarioId",gxvar:"AV34UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34UsuarioId=Value},v2z:function(Value){gx.O.ZV34UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV34UsuarioId,0)},c2v:function(){gx.O.AV34UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOUSUARIONOME",gxz:"ZV30ProcessoUsuarioNome",gxold:"OV30ProcessoUsuarioNome",gxvar:"AV30ProcessoUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProcessoUsuarioNome=Value},v2z:function(Value){gx.O.ZV30ProcessoUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vPROCESSOUSUARIONOME",gx.O.AV30ProcessoUsuarioNome,0)},c2v:function(){gx.O.AV30ProcessoUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSOUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGRIDPROCESSOROTINA",gxz:"ZV36GridProcessoRotina",gxold:"OV36GridProcessoRotina",gxvar:"AV36GridProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV36GridProcessoRotina=Value},v2z:function(Value){gx.O.ZV36GridProcessoRotina=Value},v2c:function(row){gx.fn.setGridControlValue("vGRIDPROCESSOROTINA",row || gx.fn.currentGridRowImpl(51),gx.O.AV36GridProcessoRotina,0)},c2v:function(){gx.O.AV36GridProcessoRotina=this.val()},val:function(row){return gx.fn.getGridControlValue("vGRIDPROCESSOROTINA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:this.Valid_Processorotina,isvalid:null,rgrid:[],fld:"PROCESSOROTINA",gxz:"Z1543ProcessoRotina",gxold:"O1543ProcessoRotina",gxvar:"A1543ProcessoRotina",ucs:[],op:[57],ip:[57,54,53],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1543ProcessoRotina=Value},v2z:function(Value){gx.O.Z1543ProcessoRotina=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(51),gx.O.A1543ProcessoRotina)},c2v:function(){gx.O.A1543ProcessoRotina=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:this.Valid_Processoid,isvalid:null,rgrid:[],fld:"PROCESSOID",gxz:"Z1544ProcessoId",gxold:"O1544ProcessoId",gxvar:"A1544ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1544ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1544ProcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1544ProcessoId,0)},c2v:function(){gx.O.A1544ProcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSODTINICIO",gxz:"Z1545ProcessoDtInicio",gxold:"O1545ProcessoDtInicio",gxvar:"A1545ProcessoDtInicio",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1545ProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1545ProcessoDtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSODTINICIO",row || gx.fn.currentGridRowImpl(51),gx.O.A1545ProcessoDtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1545ProcessoDtInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROCESSODTINICIO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSODTTERMINO",gxz:"Z1546ProcessoDtTermino",gxold:"O1546ProcessoDtTermino",gxvar:"A1546ProcessoDtTermino",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1546ProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1546ProcessoDtTermino=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSODTTERMINO",row || gx.fn.currentGridRowImpl(51),gx.O.A1546ProcessoDtTermino,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1546ProcessoDtTermino=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROCESSODTTERMINO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOUSUARIONOME",gxz:"Z1542ProcessoUsuarioNome",gxold:"O1542ProcessoUsuarioNome",gxvar:"A1542ProcessoUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1542ProcessoUsuarioNome=Value},v2z:function(Value){gx.O.Z1542ProcessoUsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROCESSOUSUARIONOME",row || gx.fn.currentGridRowImpl(51),gx.O.A1542ProcessoUsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1542ProcessoUsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOUSUARIONOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPERR",gxz:"ZV33bmpErr",gxold:"OV33bmpErr",gxvar:"AV33bmpErr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpErr=Value},v2z:function(Value){gx.O.ZV33bmpErr=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPERR",row || gx.fn.currentGridRowImpl(51),gx.O.AV33bmpErr,gx.O.AV44Bmperr_GXI)},c2v:function(){gx.O.AV44Bmperr_GXI=this.val_GXI();gx.O.AV33bmpErr=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPERR",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPERR_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV44Bmperr_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV7bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV8bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV16bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={fld:"PROMPT_USUARIOID",grid:0};
   this.AV27ProcessoRotina = "" ;
   this.ZV27ProcessoRotina = "" ;
   this.OV27ProcessoRotina = "" ;
   this.AV34UsuarioId = "" ;
   this.ZV34UsuarioId = "" ;
   this.OV34UsuarioId = "" ;
   this.AV30ProcessoUsuarioNome = "" ;
   this.ZV30ProcessoUsuarioNome = "" ;
   this.OV30ProcessoUsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV36GridProcessoRotina = "" ;
   this.OV36GridProcessoRotina = "" ;
   this.Z1543ProcessoRotina = "" ;
   this.O1543ProcessoRotina = "" ;
   this.Z1544ProcessoId = 0 ;
   this.O1544ProcessoId = 0 ;
   this.Z1545ProcessoDtInicio = gx.date.nullDate() ;
   this.O1545ProcessoDtInicio = gx.date.nullDate() ;
   this.Z1546ProcessoDtTermino = gx.date.nullDate() ;
   this.O1546ProcessoDtTermino = gx.date.nullDate() ;
   this.Z1542ProcessoUsuarioNome = "" ;
   this.O1542ProcessoUsuarioNome = "" ;
   this.ZV33bmpErr = "" ;
   this.OV33bmpErr = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ProcessoRotina = "" ;
   this.AV34UsuarioId = "" ;
   this.AV30ProcessoUsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1541ProcessoUsuarioId = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.AV36GridProcessoRotina = "" ;
   this.A1543ProcessoRotina = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1545ProcessoDtInicio = gx.date.nullDate() ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1542ProcessoUsuarioNome = "" ;
   this.AV33bmpErr = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.Events = {"e119x2_client": ["'ANTERIOR'", true] ,"e129x2_client": ["'PROXIMO'", true] ,"e209x2_client": ["'ALTERAR'", true] ,"e219x2_client": ["'EXCLUIR'", true] ,"e229x2_client": ["'CONSULTAR'", true] ,"e169x2_client": ["VPAGINA.CLICK", true] ,"e139x2_client": ["'NOVO'", true] ,"e149x2_client": ["'FECHAR'", true] ,"e159x2_client": ["'PROCURAR'", true] ,"e239x2_client": ["'ATUALIZAPAGINA'", true] ,"e249x2_client": ["ENTER", true] ,"e259x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'}],[{ctrl:'PROCESSOROTINA'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PROCESSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOID","Title")',ctrl:'PROCESSOID',prop:'Title'},{ctrl:'PROCESSODTINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSODTINICIO","Title")',ctrl:'PROCESSODTINICIO',prop:'Title'},{ctrl:'PROCESSODTTERMINO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSODTTERMINO","Title")',ctrl:'PROCESSODTTERMINO',prop:'Title'},{ctrl:'PROCESSOUSUARIONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROCESSOUSUARIONOME","Title")',ctrl:'PROCESSOUSUARIONOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV30ProcessoUsuarioNome',fld:'vPROCESSOUSUARIONOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV33bmpErr',fld:'vBMPERR'},{av:'gx.fn.getCtrlProperty("vBMPERR","Tooltiptext")',ctrl:'vBMPERR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPERR","Link")',ctrl:'vBMPERR',prop:'Link'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'}],[{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'}],[{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'}],[{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ProcessoRotina',fld:'vPROCESSOROTINA'},{av:'AV34UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'A1544ProcessoId',fld:'PROCESSOID'}],[]];
   this.setPrompt("PROMPT_USUARIOID", [21]);
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("A1554ProcessoQtdeErros", "PROCESSOQTDEERROS", 0, "int");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("A1554ProcessoQtdeErros", "PROCESSOQTDEERROS", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A75UsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   GridContainer.addRefreshingVar({rfrVar:"A1543ProcessoRotina", rfrProp:"Value", gxAttId:"1543"});
   GridContainer.addRefreshingVar({rfrVar:"AV36GridProcessoRotina", rfrProp:"Value", gxAttId:"Gridprocessorotina"});
   GridContainer.addRefreshingVar({rfrVar:"A1546ProcessoDtTermino", rfrProp:"Value", gxAttId:"1546"});
   GridContainer.addRefreshingVar({rfrVar:"A1554ProcessoQtdeErros"});
   GridContainer.addRefreshingVar({rfrVar:"A1544ProcessoId", rfrProp:"Value", gxAttId:"1544"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprocesso());
