/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:49:55.39
*/
gx.evt.autoSkip = false;
gx.define('hmovestfincalculo', false, function () {
   this.ServerClass =  "hmovestfincalculo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV34RelEstFinEmpresaId=gx.fn.getControlValue("vRELESTFINEMPRESAID") ;
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Relestfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRELESTFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Movestfinid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMOVESTFINID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111h02_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121h02_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e151h02_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131h02_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141h02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e191h02_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e201h02_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e211h02_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e221h02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e231h02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmovestfincalculo",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9444,59,"MOVESTFINCALCULOORDEM","Ordem","","MovEstFinCalculoOrdem","int",0,"px",3,3,"right",null,[],9444,"MovEstFinCalculoOrdem",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipooperacao",60,"vTIPOOPERACAO","Tipo de Operação","","TipoOperacao","char",0,"px",20,20,"left",null,[],"Tipooperacao","TipoOperacao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9445,61,"MOVESTFINCALCULOOPERACAO","Mov Est Fin Calculo Operacao","","MovEstFinCalculoOperacao","char",0,"px",1,1,"left",null,[],9445,"MovEstFinCalculoOperacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9448,62,"MOVESTFINCALCULOSEQ","Mov Est Fin Calculo Seq","","MovEstFinCalculoSeq","int",0,"px",3,3,"right",null,[],9448,"MovEstFinCalculoSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9443,63,"MOVESTFINID","Mov Est Fin Id","","MovEstFinId","int",0,"px",3,3,"right",null,[],9443,"MovEstFinId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px","e191h02_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px","e201h02_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px","e211h02_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Relestfinid,isvalid:null,rgrid:[this.GridContainer],fld:"vRELESTFINID",gxz:"ZV36RelEstFinId",gxold:"OV36RelEstFinId",gxvar:"AV36RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36RelEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRELESTFINID",gx.O.AV36RelEstFinId,0)},c2v:function(){gx.O.AV36RelEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRELESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRELESTFINDESCRICAO",gxz:"ZV35RelEstFinDescricao",gxold:"OV35RelEstFinDescricao",gxvar:"AV35RelEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35RelEstFinDescricao=Value},v2z:function(Value){gx.O.ZV35RelEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vRELESTFINDESCRICAO",gx.O.AV35RelEstFinDescricao,0)},c2v:function(){gx.O.AV35RelEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRELESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE11",grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Movestfinid,isvalid:null,rgrid:[this.GridContainer],fld:"vMOVESTFINID",gxz:"ZV33MovEstFinId",gxold:"OV33MovEstFinId",gxvar:"AV33MovEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33MovEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33MovEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVESTFINID",gx.O.AV33MovEstFinId,0)},c2v:function(){gx.O.AV33MovEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVESTFINDESCRICAO",gxz:"ZV37MovEstFinDescricao",gxold:"OV37MovEstFinDescricao",gxvar:"AV37MovEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37MovEstFinDescricao=Value},v2z:function(Value){gx.O.ZV37MovEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vMOVESTFINDESCRICAO",gx.O.AV37MovEstFinDescricao,0)},c2v:function(){gx.O.AV37MovEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMOVESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE6",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULOORDEM",gxz:"Z9444MovEstFinCalculoOrdem",gxold:"O9444MovEstFinCalculoOrdem",gxvar:"A9444MovEstFinCalculoOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9444MovEstFinCalculoOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9444MovEstFinCalculoOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINCALCULOORDEM",row || gx.fn.currentGridRowImpl(58),gx.O.A9444MovEstFinCalculoOrdem,0)},c2v:function(){gx.O.A9444MovEstFinCalculoOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVESTFINCALCULOORDEM",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOOPERACAO",gxz:"ZV32TipoOperacao",gxold:"OV32TipoOperacao",gxvar:"AV32TipoOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32TipoOperacao=Value},v2z:function(Value){gx.O.ZV32TipoOperacao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOOPERACAO",row || gx.fn.currentGridRowImpl(58),gx.O.AV32TipoOperacao,0)},c2v:function(){gx.O.AV32TipoOperacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOOPERACAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULOOPERACAO",gxz:"Z9445MovEstFinCalculoOperacao",gxold:"O9445MovEstFinCalculoOperacao",gxvar:"A9445MovEstFinCalculoOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9445MovEstFinCalculoOperacao=Value},v2z:function(Value){gx.O.Z9445MovEstFinCalculoOperacao=Value},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(58),gx.O.A9445MovEstFinCalculoOperacao,0)},c2v:function(){gx.O.A9445MovEstFinCalculoOperacao=this.val()},val:function(row){return gx.fn.getGridControlValue("MOVESTFINCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINCALCULOSEQ",gxz:"Z9448MovEstFinCalculoSeq",gxold:"O9448MovEstFinCalculoSeq",gxvar:"A9448MovEstFinCalculoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9448MovEstFinCalculoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9448MovEstFinCalculoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINCALCULOSEQ",row || gx.fn.currentGridRowImpl(58),gx.O.A9448MovEstFinCalculoSeq,0)},c2v:function(){gx.O.A9448MovEstFinCalculoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVESTFINCALCULOSEQ",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINID",gxz:"Z9443MovEstFinId",gxold:"O9443MovEstFinId",gxvar:"A9443MovEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9443MovEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9443MovEstFinId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINID",row || gx.fn.currentGridRowImpl(58),gx.O.A9443MovEstFinId,0)},c2v:function(){gx.O.A9443MovEstFinId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVESTFINID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   this.AV36RelEstFinId = 0 ;
   this.ZV36RelEstFinId = 0 ;
   this.OV36RelEstFinId = 0 ;
   this.AV35RelEstFinDescricao = "" ;
   this.ZV35RelEstFinDescricao = "" ;
   this.OV35RelEstFinDescricao = "" ;
   this.AV33MovEstFinId = 0 ;
   this.ZV33MovEstFinId = 0 ;
   this.OV33MovEstFinId = 0 ;
   this.AV37MovEstFinDescricao = "" ;
   this.ZV37MovEstFinDescricao = "" ;
   this.OV37MovEstFinDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z9444MovEstFinCalculoOrdem = 0 ;
   this.O9444MovEstFinCalculoOrdem = 0 ;
   this.ZV32TipoOperacao = "" ;
   this.OV32TipoOperacao = "" ;
   this.Z9445MovEstFinCalculoOperacao = "" ;
   this.O9445MovEstFinCalculoOperacao = "" ;
   this.Z9448MovEstFinCalculoSeq = 0 ;
   this.O9448MovEstFinCalculoSeq = 0 ;
   this.Z9443MovEstFinId = 0 ;
   this.O9443MovEstFinId = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV36RelEstFinId = 0 ;
   this.AV35RelEstFinDescricao = "" ;
   this.AV33MovEstFinId = 0 ;
   this.AV37MovEstFinDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV34RelEstFinEmpresaId = "" ;
   this.A9548RelEstFinId = 0 ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.A9444MovEstFinCalculoOrdem = 0 ;
   this.AV32TipoOperacao = "" ;
   this.A9445MovEstFinCalculoOperacao = "" ;
   this.A9448MovEstFinCalculoSeq = 0 ;
   this.A9443MovEstFinId = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.Events = {"e111h02_client": ["'ANTERIOR'", true] ,"e121h02_client": ["'PROXIMO'", true] ,"e151h02_client": ["VPAGINA.CLICK", true] ,"e131h02_client": ["'NOVO'", true] ,"e141h02_client": ["'FECHAR'", true] ,"e191h02_client": ["'ALTERAR'", true] ,"e201h02_client": ["'EXCLUIR'", true] ,"e211h02_client": ["'CONSULTAR'", true] ,"e221h02_client": ["ENTER", true] ,"e231h02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34RelEstFinEmpresaId',fld:'vRELESTFINEMPRESAID',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A9445MovEstFinCalculoOperacao',fld:'MOVESTFINCALCULOOPERACAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34RelEstFinEmpresaId',fld:'vRELESTFINEMPRESAID',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A9445MovEstFinCalculoOperacao',fld:'MOVESTFINCALCULOOPERACAO'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9445MovEstFinCalculoOperacao',fld:'MOVESTFINCALCULOOPERACAO'}],[{av:'AV32TipoOperacao',fld:'vTIPOOPERACAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34RelEstFinEmpresaId',fld:'vRELESTFINEMPRESAID',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A9445MovEstFinCalculoOperacao',fld:'MOVESTFINCALCULOOPERACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34RelEstFinEmpresaId',fld:'vRELESTFINEMPRESAID',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A9445MovEstFinCalculoOperacao',fld:'MOVESTFINCALCULOOPERACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34RelEstFinEmpresaId',fld:'vRELESTFINEMPRESAID',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A9445MovEstFinCalculoOperacao',fld:'MOVESTFINCALCULOOPERACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true}],[{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'A9448MovEstFinCalculoSeq',fld:'MOVESTFINCALCULOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A9448MovEstFinCalculoSeq',fld:'MOVESTFINCALCULOSEQ'},{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'A9448MovEstFinCalculoSeq',fld:'MOVESTFINCALCULOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A9448MovEstFinCalculoSeq',fld:'MOVESTFINCALCULOSEQ'},{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'A9448MovEstFinCalculoSeq',fld:'MOVESTFINCALCULOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A9448MovEstFinCalculoSeq',fld:'MOVESTFINCALCULOSEQ'},{av:'AV37MovEstFinDescricao',fld:'vMOVESTFINDESCRICAO',hsh:true},{av:'AV33MovEstFinId',fld:'vMOVESTFINID',hsh:true},{av:'AV35RelEstFinDescricao',fld:'vRELESTFINDESCRICAO',hsh:true},{av:'AV36RelEstFinId',fld:'vRELESTFINID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV34RelEstFinEmpresaId", "vRELESTFINEMPRESAID", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV34RelEstFinEmpresaId", "vRELESTFINEMPRESAID", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV34RelEstFinEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A9445MovEstFinCalculoOperacao", rfrProp:"Value", gxAttId:"9445"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovestfincalculo());
