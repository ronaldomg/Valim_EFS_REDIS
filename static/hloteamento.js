/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:34.16
*/
gx.evt.autoSkip = false;
gx.define('hloteamento', false, function () {
   this.ServerClass =  "hloteamento" ;
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
      this.AV36SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11uh2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12uh2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17uh2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13uh2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14uh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15uh2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16uh2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21uh2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22uh2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23uh2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24uh2_client=function()
   {
      this.executeServerEvent("'LOTES'", true, arguments[0], false, false);
   };
   this.e25uh2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26uh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27uh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,64,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hloteamento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5314,49,"LOTEAMENTOID","","","LoteamentoId","int",0,"px",3,3,"right",null,[],5314,"LoteamentoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5315,50,"LOTEAMENTONOME","","","LoteamentoNome","svchar",0,"px",60,60,"left",null,[],5315,"LoteamentoNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Loteamentonomegrid",51,"vLOTEAMENTONOMEGRID","Nome Loteamento","","LoteamentoNomeGrid","svchar",0,"px",60,60,"left",null,[],"Loteamentonomegrid","LoteamentoNomeGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5319,52,"LOTEAMENTOAREATOTAL","","","LoteamentoAreaTotal","decimal",0,"px",11,11,"right",null,[],5319,"LoteamentoAreaTotal",true,3,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmplotes","vBMPLOTES",53,0,"px",17,"px","e24uh2_client","","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e21uh2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e22uh2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e23uh2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5291,57,"LOTEAMENTOIDENTIFICACAOLOTES","Identificação Lotes","","LoteamentoIdentificacaoLotes","char",0,"px",1,1,"left",null,[],5291,"LoteamentoIdentificacaoLotes",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8511,58,"LOTEAMENTOTIPOVALOR","Tipo de Valor","","LoteamentoTipoValor","char",0,"px",1,1,"left",null,[],8511,"LoteamentoTipoValor",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEAMENTOID",gxz:"ZV30LoteamentoId",gxold:"OV30LoteamentoId",gxvar:"AV30LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOID",gx.O.AV30LoteamentoId,0)},c2v:function(){gx.O.AV30LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEAMENTONOME",gxz:"ZV31LoteamentoNome",gxold:"OV31LoteamentoNome",gxvar:"AV31LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31LoteamentoNome=Value},v2z:function(Value){gx.O.ZV31LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTONOME",gx.O.AV31LoteamentoNome,0)},c2v:function(){gx.O.AV31LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOID",gxz:"Z5314LoteamentoId",gxold:"O5314LoteamentoId",gxvar:"A5314LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5314LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5314LoteamentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOTEAMENTOID",row || gx.fn.currentGridRowImpl(48),gx.O.A5314LoteamentoId,0)},c2v:function(){gx.O.A5314LoteamentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOTEAMENTOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTONOME",gxz:"Z5315LoteamentoNome",gxold:"O5315LoteamentoNome",gxvar:"A5315LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5315LoteamentoNome=Value},v2z:function(Value){gx.O.Z5315LoteamentoNome=Value},v2c:function(row){gx.fn.setGridControlValue("LOTEAMENTONOME",row || gx.fn.currentGridRowImpl(48),gx.O.A5315LoteamentoNome,0)},c2v:function(){gx.O.A5315LoteamentoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTEAMENTONOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEAMENTONOMEGRID",gxz:"ZV37LoteamentoNomeGrid",gxold:"OV37LoteamentoNomeGrid",gxvar:"AV37LoteamentoNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37LoteamentoNomeGrid=Value},v2z:function(Value){gx.O.ZV37LoteamentoNomeGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTEAMENTONOMEGRID",row || gx.fn.currentGridRowImpl(48),gx.O.AV37LoteamentoNomeGrid,0)},c2v:function(){gx.O.AV37LoteamentoNomeGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTEAMENTONOMEGRID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOAREATOTAL",gxz:"Z5319LoteamentoAreaTotal",gxold:"O5319LoteamentoAreaTotal",gxvar:"A5319LoteamentoAreaTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5319LoteamentoAreaTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5319LoteamentoAreaTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEAMENTOAREATOTAL",row || gx.fn.currentGridRowImpl(48),gx.O.A5319LoteamentoAreaTotal,3,',')},c2v:function(){gx.O.A5319LoteamentoAreaTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEAMENTOAREATOTAL",row || gx.fn.currentGridRowImpl(48),'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOTES",gxz:"ZV33BmpLotes",gxold:"OV33BmpLotes",gxvar:"AV33BmpLotes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33BmpLotes=Value},v2z:function(Value){gx.O.ZV33BmpLotes=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOTES",row || gx.fn.currentGridRowImpl(48),gx.O.AV33BmpLotes,gx.O.AV45Bmplotes_GXI)},c2v:function(){gx.O.AV45Bmplotes_GXI=this.val_GXI();gx.O.AV33BmpLotes=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOTES",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOTES_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV45Bmplotes_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOIDENTIFICACAOLOTES",gxz:"Z5291LoteamentoIdentificacaoLotes",gxold:"O5291LoteamentoIdentificacaoLotes",gxvar:"A5291LoteamentoIdentificacaoLotes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5291LoteamentoIdentificacaoLotes=Value},v2z:function(Value){gx.O.Z5291LoteamentoIdentificacaoLotes=Value},v2c:function(row){gx.fn.setGridControlValue("LOTEAMENTOIDENTIFICACAOLOTES",row || gx.fn.currentGridRowImpl(48),gx.O.A5291LoteamentoIdentificacaoLotes,0)},c2v:function(){gx.O.A5291LoteamentoIdentificacaoLotes=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTEAMENTOIDENTIFICACAOLOTES",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOTIPOVALOR",gxz:"Z8511LoteamentoTipoValor",gxold:"O8511LoteamentoTipoValor",gxvar:"A8511LoteamentoTipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8511LoteamentoTipoValor=Value},v2z:function(Value){gx.O.Z8511LoteamentoTipoValor=Value},v2c:function(row){gx.fn.setGridControlValue("LOTEAMENTOTIPOVALOR",row || gx.fn.currentGridRowImpl(48),gx.O.A8511LoteamentoTipoValor,0)},c2v:function(){gx.O.A8511LoteamentoTipoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTEAMENTOTIPOVALOR",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEAMENTOEMPRESAID",gxz:"ZV32LoteamentoEmpresaId",gxold:"OV32LoteamentoEmpresaId",gxvar:"AV32LoteamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32LoteamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV32LoteamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOEMPRESAID",gx.O.AV32LoteamentoEmpresaId,0)},c2v:function(){gx.O.AV32LoteamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV30LoteamentoId = 0 ;
   this.ZV30LoteamentoId = 0 ;
   this.OV30LoteamentoId = 0 ;
   this.AV31LoteamentoNome = "" ;
   this.ZV31LoteamentoNome = "" ;
   this.OV31LoteamentoNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5314LoteamentoId = 0 ;
   this.O5314LoteamentoId = 0 ;
   this.Z5315LoteamentoNome = "" ;
   this.O5315LoteamentoNome = "" ;
   this.ZV37LoteamentoNomeGrid = "" ;
   this.OV37LoteamentoNomeGrid = "" ;
   this.Z5319LoteamentoAreaTotal = 0 ;
   this.O5319LoteamentoAreaTotal = 0 ;
   this.ZV33BmpLotes = "" ;
   this.OV33BmpLotes = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5291LoteamentoIdentificacaoLotes = "" ;
   this.O5291LoteamentoIdentificacaoLotes = "" ;
   this.Z8511LoteamentoTipoValor = "" ;
   this.O8511LoteamentoTipoValor = "" ;
   this.AV32LoteamentoEmpresaId = "" ;
   this.ZV32LoteamentoEmpresaId = "" ;
   this.OV32LoteamentoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV30LoteamentoId = 0 ;
   this.AV31LoteamentoNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV32LoteamentoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5314LoteamentoId = 0 ;
   this.A5315LoteamentoNome = "" ;
   this.AV37LoteamentoNomeGrid = "" ;
   this.A5319LoteamentoAreaTotal = 0 ;
   this.AV33BmpLotes = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5291LoteamentoIdentificacaoLotes = "" ;
   this.A8511LoteamentoTipoValor = "" ;
   this.AV36SnRecuperaFiltro = "" ;
   this.Events = {"e11uh2_client": ["'ANTERIOR'", true] ,"e12uh2_client": ["'PROXIMO'", true] ,"e17uh2_client": ["VPAGINA.CLICK", true] ,"e13uh2_client": ["'NOVO'", true] ,"e14uh2_client": ["'FECHAR'", true] ,"e15uh2_client": ["'IMPRIMIR'", true] ,"e16uh2_client": ["'PROCURAR'", true] ,"e21uh2_client": ["'ALTERAR'", true] ,"e22uh2_client": ["'EXCLUIR'", true] ,"e23uh2_client": ["'CONSULTAR'", true] ,"e24uh2_client": ["'LOTES'", true] ,"e25uh2_client": ["'ATUALIZAPAGINA'", true] ,"e26uh2_client": ["ENTER", true] ,"e27uh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpLotes',fld:'vBMPLOTES'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Tooltiptext")',ctrl:'vBMPLOTES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Title")',ctrl:'vBMPLOTES',prop:'Title'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'}],[{av:'AV37LoteamentoNomeGrid',fld:'vLOTEAMENTONOMEGRID'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpLotes',fld:'vBMPLOTES'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Tooltiptext")',ctrl:'vBMPLOTES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Title")',ctrl:'vBMPLOTES',prop:'Title'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'}],[{ctrl:'LOTEAMENTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEAMENTOID","Title")',ctrl:'LOTEAMENTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LOTEAMENTONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEAMENTONOME","Title")',ctrl:'LOTEAMENTONOME',prop:'Title'},{ctrl:'LOTEAMENTOAREATOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEAMENTOAREATOTAL","Title")',ctrl:'LOTEAMENTOAREATOTAL',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV22filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpLotes',fld:'vBMPLOTES'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Tooltiptext")',ctrl:'vBMPLOTES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Title")',ctrl:'vBMPLOTES',prop:'Title'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpLotes',fld:'vBMPLOTES'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Tooltiptext")',ctrl:'vBMPLOTES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Title")',ctrl:'vBMPLOTES',prop:'Title'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpLotes',fld:'vBMPLOTES'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Tooltiptext")',ctrl:'vBMPLOTES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Title")',ctrl:'vBMPLOTES',prop:'Title'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'}],[{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV41Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpLotes',fld:'vBMPLOTES'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Tooltiptext")',ctrl:'vBMPLOTES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Title")',ctrl:'vBMPLOTES',prop:'Title'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'}],[{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'}],[{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'}],[{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'LOTES'"] = [[{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV37LoteamentoNomeGrid',fld:'vLOTEAMENTONOMEGRID'},{av:'A5291LoteamentoIdentificacaoLotes',fld:'LOTEAMENTOIDENTIFICACAOLOTES'},{av:'A8511LoteamentoTipoValor',fld:'LOTEAMENTOTIPOVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'}],[{av:'A8511LoteamentoTipoValor',fld:'LOTEAMENTOTIPOVALOR'},{av:'A5291LoteamentoIdentificacaoLotes',fld:'LOTEAMENTOIDENTIFICACAOLOTES'},{av:'AV37LoteamentoNomeGrid',fld:'vLOTEAMENTONOMEGRID'},{av:'A5314LoteamentoId',fld:'LOTEAMENTOID'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV30LoteamentoId',fld:'vLOTEAMENTOID'},{av:'AV31LoteamentoNome',fld:'vLOTEAMENTONOME'},{av:'AV32LoteamentoEmpresaId',fld:'vLOTEAMENTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpLotes',fld:'vBMPLOTES'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Tooltiptext")',ctrl:'vBMPLOTES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLOTES","Title")',ctrl:'vBMPLOTES',prop:'Title'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5315LoteamentoNome',fld:'LOTEAMENTONOME'}],[]];
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33BmpLotes", rfrProp:"Value", gxAttId:"Bmplotes"});
   GridContainer.addRefreshingVar({rfrVar:"AV33BmpLotes", rfrProp:"Tooltiptext", gxAttId:"Bmplotes"});
   GridContainer.addRefreshingVar({rfrVar:"AV33BmpLotes", rfrProp:"Title", gxAttId:"Bmplotes"});
   GridContainer.addRefreshingVar({rfrVar:"AV36SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A5315LoteamentoNome", rfrProp:"Value", gxAttId:"5315"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hloteamento());
