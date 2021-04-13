/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:41.87
*/
gx.evt.autoSkip = false;
gx.define('hlayoutmodeloetiquetatermica', false, function () {
   this.ServerClass =  "hlayoutmodeloetiquetatermica" ;
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
      this.AV37SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV40Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A5902EtiquetaTermicaEmpresaId=gx.fn.getControlValue("ETIQUETATERMICAEMPRESAID") ;
      this.A5903EtiquetaTermicaModelo=gx.fn.getIntegerValue("ETIQUETATERMICAMODELO",'.') ;
      this.A5904EtiquetaTermicaDescricao=gx.fn.getControlValue("ETIQUETATERMICADESCRICAO") ;
      this.AV33EtiquetaTermicaLinguagem=gx.fn.getControlValue("vETIQUETATERMICALINGUAGEM") ;
      this.AV34EtiquetaTermicaNoColunas=gx.fn.getIntegerValue("vETIQUETATERMICANOCOLUNAS",'.') ;
   };
   this.Validv_Etiquetatermicamodelo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATERMICAMODELO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11wv2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12wv2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16wv2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13wv2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14wv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15wv2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21wv2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22wv2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23wv2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24wv2_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e25wv2_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e17wv2_client=function()
   {
      this.executeServerEvent("'IMPORTAR'", true, null, false, false);
   };
   this.e26wv2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e27wv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28wv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,30,33,36,38,40,42,44,46,49,51,52,56,57,58,59,60,61,62,63,64,65,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",55,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlayoutmodeloetiquetatermica",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5905,56,"ETIQUETATERMICASEQUENCIA","","","EtiquetaTermicaSequencia","int",0,"px",3,3,"right",null,[],5905,"EtiquetaTermicaSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipodados",57,"vTIPODADOS","","","TipoDados","svchar",0,"px",20,20,"left",null,[],"Tipodados","TipoDados",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Campo",58,"vCAMPO","","","Campo","svchar",0,"px",40,40,"left",null,[],"Campo","Campo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e21wv2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e22wv2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e23wv2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5885,62,"ETIQUETATERMICATIPODADOS","Etiqueta Termica Tipo Dados","","EtiquetaTermicaTipoDados","char",0,"px",1,1,"left",null,[],5885,"EtiquetaTermicaTipoDados",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5886,63,"ETIQUETATERMICACAMPO","Etiqueta Termica Campo","","EtiquetaTermicaCampo","svchar",0,"px",40,40,"left",null,[],5886,"EtiquetaTermicaCampo",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsubir","vBMPSUBIR",64,0,"px",17,"px","e24wv2_client","","Subir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdescer","vBMPDESCER",65,0,"px",17,"px","e25wv2_client","","Descer","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatermicamodelo,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICAMODELO",gxz:"ZV27EtiquetaTermicaModelo",gxold:"OV27EtiquetaTermicaModelo",gxvar:"AV27EtiquetaTermicaModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EtiquetaTermicaModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27EtiquetaTermicaModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICAMODELO",gx.O.AV27EtiquetaTermicaModelo,0)},c2v:function(){gx.O.AV27EtiquetaTermicaModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATERMICAMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETATERMICADESCRICAO",gxz:"ZV28EtiquetaTermicaDescricao",gxold:"OV28EtiquetaTermicaDescricao",gxvar:"AV28EtiquetaTermicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EtiquetaTermicaDescricao=Value},v2z:function(Value){gx.O.ZV28EtiquetaTermicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICADESCRICAO",gx.O.AV28EtiquetaTermicaDescricao,0)},c2v:function(){gx.O.AV28EtiquetaTermicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATERMICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vETIQUETATERMICASEQUENCIA",gxz:"ZV29EtiquetaTermicaSequencia",gxold:"OV29EtiquetaTermicaSequencia",gxvar:"AV29EtiquetaTermicaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EtiquetaTermicaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29EtiquetaTermicaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETATERMICASEQUENCIA",gx.O.AV29EtiquetaTermicaSequencia,0)},c2v:function(){gx.O.AV29EtiquetaTermicaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATERMICASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TABLE6",grid:0};
   GXValidFnc[36]={fld:"IMAGE2",grid:0};
   GXValidFnc[38]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[40]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"IMGUPLOAD",grid:0};
   GXValidFnc[46]={fld:"TABLE5",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICASEQUENCIA",gxz:"Z5905EtiquetaTermicaSequencia",gxold:"O5905EtiquetaTermicaSequencia",gxvar:"A5905EtiquetaTermicaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5905EtiquetaTermicaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5905EtiquetaTermicaSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICASEQUENCIA",row || gx.fn.currentGridRowImpl(55),gx.O.A5905EtiquetaTermicaSequencia,0)},c2v:function(){gx.O.A5905EtiquetaTermicaSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETATERMICASEQUENCIA",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODADOS",gxz:"ZV32TipoDados",gxold:"OV32TipoDados",gxvar:"AV32TipoDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32TipoDados=Value},v2z:function(Value){gx.O.ZV32TipoDados=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPODADOS",row || gx.fn.currentGridRowImpl(55),gx.O.AV32TipoDados,0)},c2v:function(){gx.O.AV32TipoDados=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPODADOS",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCAMPO",gxz:"ZV31Campo",gxold:"OV31Campo",gxvar:"AV31Campo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31Campo=Value},v2z:function(Value){gx.O.ZV31Campo=Value},v2c:function(row){gx.fn.setGridControlValue("vCAMPO",row || gx.fn.currentGridRowImpl(55),gx.O.AV31Campo,0)},c2v:function(){gx.O.AV31Campo=this.val()},val:function(row){return gx.fn.getGridControlValue("vCAMPO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(55),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(55),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICATIPODADOS",gxz:"Z5885EtiquetaTermicaTipoDados",gxold:"O5885EtiquetaTermicaTipoDados",gxvar:"A5885EtiquetaTermicaTipoDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5885EtiquetaTermicaTipoDados=Value},v2z:function(Value){gx.O.Z5885EtiquetaTermicaTipoDados=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICATIPODADOS",row || gx.fn.currentGridRowImpl(55),gx.O.A5885EtiquetaTermicaTipoDados,0)},c2v:function(){gx.O.A5885EtiquetaTermicaTipoDados=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATERMICATIPODADOS",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATERMICACAMPO",gxz:"Z5886EtiquetaTermicaCampo",gxold:"O5886EtiquetaTermicaCampo",gxvar:"A5886EtiquetaTermicaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5886EtiquetaTermicaCampo=Value},v2z:function(Value){gx.O.Z5886EtiquetaTermicaCampo=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETATERMICACAMPO",row || gx.fn.currentGridRowImpl(55),gx.O.A5886EtiquetaTermicaCampo,0)},c2v:function(){gx.O.A5886EtiquetaTermicaCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATERMICACAMPO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUBIR",gxz:"ZV35bmpSubir",gxold:"OV35bmpSubir",gxvar:"AV35bmpSubir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35bmpSubir=Value},v2z:function(Value){gx.O.ZV35bmpSubir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(55),gx.O.AV35bmpSubir,gx.O.AV45Bmpsubir_GXI)},c2v:function(){gx.O.AV45Bmpsubir_GXI=this.val_GXI();gx.O.AV35bmpSubir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUBIR_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV45Bmpsubir_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCER",gxz:"ZV36bmpDescer",gxold:"OV36bmpDescer",gxvar:"AV36bmpDescer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpDescer=Value},v2z:function(Value){gx.O.ZV36bmpDescer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(55),gx.O.AV36bmpDescer,gx.O.AV46Bmpdescer_GXI)},c2v:function(){gx.O.AV46Bmpdescer_GXI=this.val_GXI();gx.O.AV36bmpDescer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESCER_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV46Bmpdescer_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27EtiquetaTermicaModelo = 0 ;
   this.ZV27EtiquetaTermicaModelo = 0 ;
   this.OV27EtiquetaTermicaModelo = 0 ;
   this.AV28EtiquetaTermicaDescricao = "" ;
   this.ZV28EtiquetaTermicaDescricao = "" ;
   this.OV28EtiquetaTermicaDescricao = "" ;
   this.AV29EtiquetaTermicaSequencia = 0 ;
   this.ZV29EtiquetaTermicaSequencia = 0 ;
   this.OV29EtiquetaTermicaSequencia = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5905EtiquetaTermicaSequencia = 0 ;
   this.O5905EtiquetaTermicaSequencia = 0 ;
   this.ZV32TipoDados = "" ;
   this.OV32TipoDados = "" ;
   this.ZV31Campo = "" ;
   this.OV31Campo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5885EtiquetaTermicaTipoDados = "" ;
   this.O5885EtiquetaTermicaTipoDados = "" ;
   this.Z5886EtiquetaTermicaCampo = "" ;
   this.O5886EtiquetaTermicaCampo = "" ;
   this.ZV35bmpSubir = "" ;
   this.OV35bmpSubir = "" ;
   this.ZV36bmpDescer = "" ;
   this.OV36bmpDescer = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27EtiquetaTermicaModelo = 0 ;
   this.AV28EtiquetaTermicaDescricao = "" ;
   this.AV29EtiquetaTermicaSequencia = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33EtiquetaTermicaLinguagem = "" ;
   this.AV34EtiquetaTermicaNoColunas = 0 ;
   this.A5903EtiquetaTermicaModelo = 0 ;
   this.A5902EtiquetaTermicaEmpresaId = "" ;
   this.A5905EtiquetaTermicaSequencia = 0 ;
   this.AV32TipoDados = "" ;
   this.AV31Campo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5885EtiquetaTermicaTipoDados = "" ;
   this.A5886EtiquetaTermicaCampo = "" ;
   this.AV35bmpSubir = "" ;
   this.AV36bmpDescer = "" ;
   this.A5904EtiquetaTermicaDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV37SnRecuperaFiltro = "" ;
   this.AV40Pgmname = "" ;
   this.Events = {"e11wv2_client": ["'ANTERIOR'", true] ,"e12wv2_client": ["'PROXIMO'", true] ,"e16wv2_client": ["VPAGINA.CLICK", true] ,"e13wv2_client": ["'NOVO'", true] ,"e14wv2_client": ["'FECHAR'", true] ,"e15wv2_client": ["'PROCURAR'", true] ,"e21wv2_client": ["'ALTERAR'", true] ,"e22wv2_client": ["'EXCLUIR'", true] ,"e23wv2_client": ["'CONSULTAR'", true] ,"e24wv2_client": ["'SUBIR'", true] ,"e25wv2_client": ["'DESCER'", true] ,"e17wv2_client": ["'IMPORTAR'", true] ,"e26wv2_client": ["'ATUALIZAPAGINA'", true] ,"e27wv2_client": ["ENTER", true] ,"e28wv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'}],[{ctrl:'ETIQUETATERMICASEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETATERMICASEQUENCIA","Title")',ctrl:'ETIQUETATERMICASEQUENCIA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vTIPODADOS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPODADOS","Title")',ctrl:'vTIPODADOS',prop:'Title'},{ctrl:'vCAMPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCAMPO","Title")',ctrl:'vCAMPO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'}],[{av:'AV32TipoDados',fld:'vTIPODADOS'},{av:'AV31Campo',fld:'vCAMPO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV33EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV34EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'A5905EtiquetaTermicaSequencia',fld:'ETIQUETATERMICASEQUENCIA'},{av:'AV33EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV34EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'A5905EtiquetaTermicaSequencia',fld:'ETIQUETATERMICASEQUENCIA'},{av:'AV33EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV34EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'A5905EtiquetaTermicaSequencia',fld:'ETIQUETATERMICASEQUENCIA'},{av:'AV33EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV34EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28EtiquetaTermicaDescricao',fld:'vETIQUETATERMICADESCRICAO'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'A5905EtiquetaTermicaSequencia',fld:'ETIQUETATERMICASEQUENCIA'}],[]];
   this.EvtParms["'DESCER'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'A5905EtiquetaTermicaSequencia',fld:'ETIQUETATERMICASEQUENCIA'}],[]];
   this.EvtParms["'IMPORTAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'},{av:'AV33EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV34EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true}],[{av:'AV34EtiquetaTermicaNoColunas',fld:'vETIQUETATERMICANOCOLUNAS',hsh:true},{av:'AV33EtiquetaTermicaLinguagem',fld:'vETIQUETATERMICALINGUAGEM',hsh:true},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29EtiquetaTermicaSequencia',fld:'vETIQUETATERMICASEQUENCIA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27EtiquetaTermicaModelo',fld:'vETIQUETATERMICAMODELO',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV36bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A5902EtiquetaTermicaEmpresaId',fld:'ETIQUETATERMICAEMPRESAID'},{av:'A5903EtiquetaTermicaModelo',fld:'ETIQUETATERMICAMODELO'},{av:'A5904EtiquetaTermicaDescricao',fld:'ETIQUETATERMICADESCRICAO'},{av:'A5885EtiquetaTermicaTipoDados',fld:'ETIQUETATERMICATIPODADOS'},{av:'A5886EtiquetaTermicaCampo',fld:'ETIQUETATERMICACAMPO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A5902EtiquetaTermicaEmpresaId", "ETIQUETATERMICAEMPRESAID", 0, "char");
   this.setVCMap("A5903EtiquetaTermicaModelo", "ETIQUETATERMICAMODELO", 0, "int");
   this.setVCMap("A5904EtiquetaTermicaDescricao", "ETIQUETATERMICADESCRICAO", 0, "svchar");
   this.setVCMap("AV33EtiquetaTermicaLinguagem", "vETIQUETATERMICALINGUAGEM", 0, "char");
   this.setVCMap("AV34EtiquetaTermicaNoColunas", "vETIQUETATERMICANOCOLUNAS", 0, "int");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A5902EtiquetaTermicaEmpresaId", "ETIQUETATERMICAEMPRESAID", 0, "char");
   this.setVCMap("A5903EtiquetaTermicaModelo", "ETIQUETATERMICAMODELO", 0, "int");
   this.setVCMap("A5904EtiquetaTermicaDescricao", "ETIQUETATERMICADESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpSubir", rfrProp:"Value", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpSubir", rfrProp:"Tooltiptext", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDescer", rfrProp:"Value", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDescer", rfrProp:"Tooltiptext", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV37SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV40Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A5902EtiquetaTermicaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A5903EtiquetaTermicaModelo"});
   GridContainer.addRefreshingVar({rfrVar:"A5904EtiquetaTermicaDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A5885EtiquetaTermicaTipoDados", rfrProp:"Value", gxAttId:"5885"});
   GridContainer.addRefreshingVar({rfrVar:"A5886EtiquetaTermicaCampo", rfrProp:"Value", gxAttId:"5886"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlayoutmodeloetiquetatermica());
