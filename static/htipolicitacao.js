/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:33:13.32
*/
gx.evt.autoSkip = false;
gx.define('htipolicitacao', false, function () {
   this.ServerClass =  "htipolicitacao" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A2476TipoLicitacaoSnExigeNumero=gx.fn.getControlValue("TIPOLICITACAOSNEXIGENUMERO") ;
      this.A3120TipoLicitacaoSnExigeDados=gx.fn.getControlValue("TIPOLICITACAOSNEXIGEDADOS") ;
      this.A3121TipoLicitacaoSnAutorizMenor=gx.fn.getControlValue("TIPOLICITACAOSNAUTORIZMENOR") ;
   };
   this.e11fq2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12fq2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17fq2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13fq2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14fq2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15fq2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16fq2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21fq2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22fq2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23fq2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24fq2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25fq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26fq2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipolicitacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2472,49,"TIPOLICITACAOID","","","TipoLicitacaoId","int",0,"px",3,3,"right",null,[],2472,"TipoLicitacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2473,50,"TIPOLICITACAODESCRICAO","","","TipoLicitacaoDescricao","svchar",0,"px",25,25,"left",null,[],2473,"TipoLicitacaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpexigenumero","vBMPEXIGENUMERO",51,0,"px",17,"px",null,"","Exige Número","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexigedados","vBMPEXIGEDADOS",52,0,"px",17,"px",null,"","Exige Dados","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpautorizmenor","vBMPAUTORIZMENOR",53,0,"px",17,"px",null,"","Registra Autorização ","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e21fq2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e22fq2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e23fq2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLICITACAOID",gxz:"ZV27TipoLicitacaoId",gxold:"OV27TipoLicitacaoId",gxvar:"AV27TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TipoLicitacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLICITACAOID",gx.O.AV27TipoLicitacaoId,0)},c2v:function(){gx.O.AV27TipoLicitacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLICITACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLICITACAODESCRICAO",gxz:"ZV28TipoLicitacaoDescricao",gxold:"OV28TipoLicitacaoDescricao",gxvar:"AV28TipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.ZV28TipoLicitacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLICITACAODESCRICAO",gx.O.AV28TipoLicitacaoDescricao,0)},c2v:function(){gx.O.AV28TipoLicitacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLICITACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAOID",gxz:"Z2472TipoLicitacaoId",gxold:"O2472TipoLicitacaoId",gxvar:"A2472TipoLicitacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2472TipoLicitacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2472TipoLicitacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAOID",row || gx.fn.currentGridRowImpl(48),gx.O.A2472TipoLicitacaoId,0)},c2v:function(){gx.O.A2472TipoLicitacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLICITACAOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLICITACAODESCRICAO",gxz:"Z2473TipoLicitacaoDescricao",gxold:"O2473TipoLicitacaoDescricao",gxvar:"A2473TipoLicitacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2473TipoLicitacaoDescricao=Value},v2z:function(Value){gx.O.Z2473TipoLicitacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A2473TipoLicitacaoDescricao,0)},c2v:function(){gx.O.A2473TipoLicitacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLICITACAODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXIGENUMERO",gxz:"ZV32bmpExigeNumero",gxold:"OV32bmpExigeNumero",gxvar:"AV32bmpExigeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpExigeNumero=Value},v2z:function(Value){gx.O.ZV32bmpExigeNumero=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXIGENUMERO",row || gx.fn.currentGridRowImpl(48),gx.O.AV32bmpExigeNumero,gx.O.AV41Bmpexigenumero_GXI)},c2v:function(){gx.O.AV41Bmpexigenumero_GXI=this.val_GXI();gx.O.AV32bmpExigeNumero=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXIGENUMERO",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXIGENUMERO_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV41Bmpexigenumero_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXIGEDADOS",gxz:"ZV30bmpExigeDados",gxold:"OV30bmpExigeDados",gxvar:"AV30bmpExigeDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpExigeDados=Value},v2z:function(Value){gx.O.ZV30bmpExigeDados=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXIGEDADOS",row || gx.fn.currentGridRowImpl(48),gx.O.AV30bmpExigeDados,gx.O.AV42Bmpexigedados_GXI)},c2v:function(){gx.O.AV42Bmpexigedados_GXI=this.val_GXI();gx.O.AV30bmpExigeDados=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXIGEDADOS",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXIGEDADOS_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV42Bmpexigedados_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPAUTORIZMENOR",gxz:"ZV31bmpAutorizMenor",gxold:"OV31bmpAutorizMenor",gxvar:"AV31bmpAutorizMenor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpAutorizMenor=Value},v2z:function(Value){gx.O.ZV31bmpAutorizMenor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPAUTORIZMENOR",row || gx.fn.currentGridRowImpl(48),gx.O.AV31bmpAutorizMenor,gx.O.AV43Bmpautorizmenor_GXI)},c2v:function(){gx.O.AV43Bmpautorizmenor_GXI=this.val_GXI();gx.O.AV31bmpAutorizMenor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPAUTORIZMENOR",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPAUTORIZMENOR_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV43Bmpautorizmenor_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TipoLicitacaoId = 0 ;
   this.ZV27TipoLicitacaoId = 0 ;
   this.OV27TipoLicitacaoId = 0 ;
   this.AV28TipoLicitacaoDescricao = "" ;
   this.ZV28TipoLicitacaoDescricao = "" ;
   this.OV28TipoLicitacaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2472TipoLicitacaoId = 0 ;
   this.O2472TipoLicitacaoId = 0 ;
   this.Z2473TipoLicitacaoDescricao = "" ;
   this.O2473TipoLicitacaoDescricao = "" ;
   this.ZV32bmpExigeNumero = "" ;
   this.OV32bmpExigeNumero = "" ;
   this.ZV30bmpExigeDados = "" ;
   this.OV30bmpExigeDados = "" ;
   this.ZV31bmpAutorizMenor = "" ;
   this.OV31bmpAutorizMenor = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TipoLicitacaoId = 0 ;
   this.AV28TipoLicitacaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2476TipoLicitacaoSnExigeNumero = "" ;
   this.A3120TipoLicitacaoSnExigeDados = "" ;
   this.A3121TipoLicitacaoSnAutorizMenor = "" ;
   this.A2471TipoLicitacaoEmpresaId = "" ;
   this.A2472TipoLicitacaoId = 0 ;
   this.A2473TipoLicitacaoDescricao = "" ;
   this.AV32bmpExigeNumero = "" ;
   this.AV30bmpExigeDados = "" ;
   this.AV31bmpAutorizMenor = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e11fq2_client": ["'ANTERIOR'", true] ,"e12fq2_client": ["'PROXIMO'", true] ,"e17fq2_client": ["VPAGINA.CLICK", true] ,"e13fq2_client": ["'NOVO'", true] ,"e14fq2_client": ["'FECHAR'", true] ,"e15fq2_client": ["'IMPRIMIR'", true] ,"e16fq2_client": ["'PROCURAR'", true] ,"e21fq2_client": ["'ALTERAR'", true] ,"e22fq2_client": ["'EXCLUIR'", true] ,"e23fq2_client": ["'CONSULTAR'", true] ,"e24fq2_client": ["'ATUALIZAPAGINA'", true] ,"e25fq2_client": ["ENTER", true] ,"e26fq2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'}],[{ctrl:'TIPOLICITACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLICITACAOID","Title")',ctrl:'TIPOLICITACAOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOLICITACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOLICITACAODESCRICAO","Title")',ctrl:'TIPOLICITACAODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'}],[{av:'AV32bmpExigeNumero',fld:'vBMPEXIGENUMERO'},{av:'AV30bmpExigeDados',fld:'vBMPEXIGEDADOS'},{av:'AV31bmpAutorizMenor',fld:'vBMPAUTORIZMENOR'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'}],[{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'}],[{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'}],[{av:'A2472TipoLicitacaoId',fld:'TIPOLICITACAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoLicitacaoId',fld:'vTIPOLICITACAOID'},{av:'AV28TipoLicitacaoDescricao',fld:'vTIPOLICITACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2476TipoLicitacaoSnExigeNumero',fld:'TIPOLICITACAOSNEXIGENUMERO'},{av:'A3120TipoLicitacaoSnExigeDados',fld:'TIPOLICITACAOSNEXIGEDADOS'},{av:'A3121TipoLicitacaoSnAutorizMenor',fld:'TIPOLICITACAOSNAUTORIZMENOR'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2476TipoLicitacaoSnExigeNumero", "TIPOLICITACAOSNEXIGENUMERO", 0, "char");
   this.setVCMap("A3120TipoLicitacaoSnExigeDados", "TIPOLICITACAOSNEXIGEDADOS", 0, "char");
   this.setVCMap("A3121TipoLicitacaoSnAutorizMenor", "TIPOLICITACAOSNAUTORIZMENOR", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2476TipoLicitacaoSnExigeNumero", "TIPOLICITACAOSNEXIGENUMERO", 0, "char");
   this.setVCMap("A3120TipoLicitacaoSnExigeDados", "TIPOLICITACAOSNEXIGEDADOS", 0, "char");
   this.setVCMap("A3121TipoLicitacaoSnAutorizMenor", "TIPOLICITACAOSNAUTORIZMENOR", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2476TipoLicitacaoSnExigeNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A3120TipoLicitacaoSnExigeDados"});
   GridContainer.addRefreshingVar({rfrVar:"A3121TipoLicitacaoSnAutorizMenor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipolicitacao());
