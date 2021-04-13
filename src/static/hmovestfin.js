/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:49:51.99
*/
gx.evt.autoSkip = false;
gx.define('hmovestfin', false, function () {
   this.ServerClass =  "hmovestfin" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV36SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV40Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e111gz2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121gz2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e151gz2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131gz2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141gz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e191gz2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e201gz2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e211gz2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e221gz2_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e231gz2_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e241gz2_client=function()
   {
      this.executeServerEvent("'MOVESTFINFILTROS'", true, arguments[0], false, false);
   };
   this.e251gz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261gz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,58,59,60,67];
   this.GXLastCtrlId =67;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmovestfin",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Descricaotitulo",47,"vDESCRICAOTITULO","Título","","DescricaoTitulo","svchar",0,"px",100,80,"left",null,[],"Descricaotitulo","DescricaoTitulo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9434,48,"MOVESTFINORDEM","Ordem","","MovEstFinOrdem","int",0,"px",3,3,"right",null,[],9434,"MovEstFinOrdem",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipoinformacao",49,"vTIPOINFORMACAO","Tipo de Informação","","TipoInformacao","char",0,"px",30,30,"left",null,[],"Tipoinformacao","TipoInformacao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9443,50,"MOVESTFINID","Mov Est Fin Id","","MovEstFinId","int",0,"px",3,3,"right",null,[],9443,"MovEstFinId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9435,51,"MOVESTFINTIPO","Mov Est Fin Tipo","","MovEstFinTipo","int",0,"px",2,2,"right",null,[],9435,"MovEstFinTipo",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e191gz2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e201gz2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e211gz2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsubir","vBMPSUBIR",55,0,"px",17,"px","e221gz2_client","","Subir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdescer","vBMPDESCER",56,0,"px",17,"px","e231gz2_client","","Descer","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpitens","vBMPITENS",57,0,"px",17,"px","e241gz2_client","","Itens","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(9547,58,"RELESTFINEMPRESAID","Rel Est Fin Empresa Id","","RelEstFinEmpresaId","char",0,"px",10,10,"left",null,[],9547,"RelEstFinEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9433,59,"MOVESTFINDESCRICAO","Título","","MovEstFinDescricao","svchar",0,"px",100,80,"left",null,[],9433,"MovEstFinDescricao",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9548,60,"RELESTFINID","Rel Est Fin Id","","RelEstFinId","int",0,"px",3,3,"right",null,[],9548,"RelEstFinId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRELESTFINID",gxz:"ZV32RelEstFinId",gxold:"OV32RelEstFinId",gxvar:"AV32RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32RelEstFinId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRELESTFINID",gx.O.AV32RelEstFinId,0)},c2v:function(){gx.O.AV32RelEstFinId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRELESTFINID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRELESTFINDESCRICAO",gxz:"ZV33RelEstFinDescricao",gxold:"OV33RelEstFinDescricao",gxvar:"AV33RelEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33RelEstFinDescricao=Value},v2z:function(Value){gx.O.ZV33RelEstFinDescricao=Value},v2c:function(){gx.fn.setControlValue("vRELESTFINDESCRICAO",gx.O.AV33RelEstFinDescricao,0)},c2v:function(){gx.O.AV33RelEstFinDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRELESTFINDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAOTITULO",gxz:"ZV37DescricaoTitulo",gxold:"OV37DescricaoTitulo",gxvar:"AV37DescricaoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37DescricaoTitulo=Value},v2z:function(Value){gx.O.ZV37DescricaoTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAOTITULO",row || gx.fn.currentGridRowImpl(46),gx.O.AV37DescricaoTitulo,0)},c2v:function(){gx.O.AV37DescricaoTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAOTITULO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINORDEM",gxz:"Z9434MovEstFinOrdem",gxold:"O9434MovEstFinOrdem",gxvar:"A9434MovEstFinOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9434MovEstFinOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9434MovEstFinOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINORDEM",row || gx.fn.currentGridRowImpl(46),gx.O.A9434MovEstFinOrdem,0)},c2v:function(){gx.O.A9434MovEstFinOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVESTFINORDEM",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOINFORMACAO",gxz:"ZV30TipoInformacao",gxold:"OV30TipoInformacao",gxvar:"AV30TipoInformacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30TipoInformacao=Value},v2z:function(Value){gx.O.ZV30TipoInformacao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOINFORMACAO",row || gx.fn.currentGridRowImpl(46),gx.O.AV30TipoInformacao,0)},c2v:function(){gx.O.AV30TipoInformacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOINFORMACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINID",gxz:"Z9443MovEstFinId",gxold:"O9443MovEstFinId",gxvar:"A9443MovEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9443MovEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9443MovEstFinId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINID",row || gx.fn.currentGridRowImpl(46),gx.O.A9443MovEstFinId,0)},c2v:function(){gx.O.A9443MovEstFinId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVESTFINID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINTIPO",gxz:"Z9435MovEstFinTipo",gxold:"O9435MovEstFinTipo",gxvar:"A9435MovEstFinTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9435MovEstFinTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9435MovEstFinTipo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A9435MovEstFinTipo,0)},c2v:function(){gx.O.A9435MovEstFinTipo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVESTFINTIPO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUBIR",gxz:"ZV28bmpSubir",gxold:"OV28bmpSubir",gxvar:"AV28bmpSubir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28bmpSubir=Value},v2z:function(Value){gx.O.ZV28bmpSubir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(46),gx.O.AV28bmpSubir,gx.O.AV45Bmpsubir_GXI)},c2v:function(){gx.O.AV45Bmpsubir_GXI=this.val_GXI();gx.O.AV28bmpSubir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUBIR",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUBIR_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV45Bmpsubir_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESCER",gxz:"ZV29bmpDescer",gxold:"OV29bmpDescer",gxvar:"AV29bmpDescer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpDescer=Value},v2z:function(Value){gx.O.ZV29bmpDescer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(46),gx.O.AV29bmpDescer,gx.O.AV46Bmpdescer_GXI)},c2v:function(){gx.O.AV46Bmpdescer_GXI=this.val_GXI();gx.O.AV29bmpDescer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESCER",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESCER_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV46Bmpdescer_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITENS",gxz:"ZV31BmpItens",gxold:"OV31BmpItens",gxvar:"AV31BmpItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31BmpItens=Value},v2z:function(Value){gx.O.ZV31BmpItens=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITENS",row || gx.fn.currentGridRowImpl(46),gx.O.AV31BmpItens,gx.O.AV47Bmpitens_GXI)},c2v:function(){gx.O.AV47Bmpitens_GXI=this.val_GXI();gx.O.AV31BmpItens=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITENS",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITENS_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV47Bmpitens_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINEMPRESAID",gxz:"Z9547RelEstFinEmpresaId",gxold:"O9547RelEstFinEmpresaId",gxvar:"A9547RelEstFinEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9547RelEstFinEmpresaId=Value},v2z:function(Value){gx.O.Z9547RelEstFinEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("RELESTFINEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A9547RelEstFinEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9547RelEstFinEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("RELESTFINEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MOVESTFINDESCRICAO",gxz:"Z9433MovEstFinDescricao",gxold:"O9433MovEstFinDescricao",gxvar:"A9433MovEstFinDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9433MovEstFinDescricao=Value},v2z:function(Value){gx.O.Z9433MovEstFinDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MOVESTFINDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A9433MovEstFinDescricao,0)},c2v:function(){gx.O.A9433MovEstFinDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MOVESTFINDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RELESTFINID",gxz:"Z9548RelEstFinId",gxold:"O9548RelEstFinId",gxvar:"A9548RelEstFinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9548RelEstFinId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9548RelEstFinId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RELESTFINID",row || gx.fn.currentGridRowImpl(46),gx.O.A9548RelEstFinId,0)},c2v:function(){gx.O.A9548RelEstFinId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RELESTFINID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV32RelEstFinId = 0 ;
   this.ZV32RelEstFinId = 0 ;
   this.OV32RelEstFinId = 0 ;
   this.AV33RelEstFinDescricao = "" ;
   this.ZV33RelEstFinDescricao = "" ;
   this.OV33RelEstFinDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV37DescricaoTitulo = "" ;
   this.OV37DescricaoTitulo = "" ;
   this.Z9434MovEstFinOrdem = 0 ;
   this.O9434MovEstFinOrdem = 0 ;
   this.ZV30TipoInformacao = "" ;
   this.OV30TipoInformacao = "" ;
   this.Z9443MovEstFinId = 0 ;
   this.O9443MovEstFinId = 0 ;
   this.Z9435MovEstFinTipo = 0 ;
   this.O9435MovEstFinTipo = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV28bmpSubir = "" ;
   this.OV28bmpSubir = "" ;
   this.ZV29bmpDescer = "" ;
   this.OV29bmpDescer = "" ;
   this.ZV31BmpItens = "" ;
   this.OV31BmpItens = "" ;
   this.Z9547RelEstFinEmpresaId = "" ;
   this.O9547RelEstFinEmpresaId = "" ;
   this.Z9433MovEstFinDescricao = "" ;
   this.O9433MovEstFinDescricao = "" ;
   this.Z9548RelEstFinId = 0 ;
   this.O9548RelEstFinId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV32RelEstFinId = 0 ;
   this.AV33RelEstFinDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV37DescricaoTitulo = "" ;
   this.A9434MovEstFinOrdem = 0 ;
   this.AV30TipoInformacao = "" ;
   this.A9443MovEstFinId = 0 ;
   this.A9435MovEstFinTipo = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV28bmpSubir = "" ;
   this.AV29bmpDescer = "" ;
   this.AV31BmpItens = "" ;
   this.A9547RelEstFinEmpresaId = "" ;
   this.A9433MovEstFinDescricao = "" ;
   this.A9548RelEstFinId = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV36SnRecuperaFiltro = "" ;
   this.AV40Pgmname = "" ;
   this.Events = {"e111gz2_client": ["'ANTERIOR'", true] ,"e121gz2_client": ["'PROXIMO'", true] ,"e151gz2_client": ["VPAGINA.CLICK", true] ,"e131gz2_client": ["'NOVO'", true] ,"e141gz2_client": ["'FECHAR'", true] ,"e191gz2_client": ["'ALTERAR'", true] ,"e201gz2_client": ["'EXCLUIR'", true] ,"e211gz2_client": ["'CONSULTAR'", true] ,"e221gz2_client": ["'SUBIR'", true] ,"e231gz2_client": ["'DESCER'", true] ,"e241gz2_client": ["'MOVESTFINFILTROS'", true] ,"e251gz2_client": ["ENTER", true] ,"e261gz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV29bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV31BmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A9433MovEstFinDescricao',fld:'MOVESTFINDESCRICAO'},{av:'A9435MovEstFinTipo',fld:'MOVESTFINTIPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV29bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV31BmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A9433MovEstFinDescricao',fld:'MOVESTFINDESCRICAO'},{av:'A9435MovEstFinTipo',fld:'MOVESTFINTIPO'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9433MovEstFinDescricao',fld:'MOVESTFINDESCRICAO'},{av:'A9435MovEstFinTipo',fld:'MOVESTFINTIPO'}],[{av:'gx.fn.getCtrlProperty("vBMPITENS","Enabled")',ctrl:'vBMPITENS',prop:'Enabled'},{av:'AV37DescricaoTitulo',fld:'vDESCRICAOTITULO'},{av:'AV30TipoInformacao',fld:'vTIPOINFORMACAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV29bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV31BmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A9433MovEstFinDescricao',fld:'MOVESTFINDESCRICAO'},{av:'A9435MovEstFinTipo',fld:'MOVESTFINTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV29bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV31BmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A9433MovEstFinDescricao',fld:'MOVESTFINDESCRICAO'},{av:'A9435MovEstFinTipo',fld:'MOVESTFINTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28bmpSubir',fld:'vBMPSUBIR'},{av:'gx.fn.getCtrlProperty("vBMPSUBIR","Tooltiptext")',ctrl:'vBMPSUBIR',prop:'Tooltiptext'},{av:'AV29bmpDescer',fld:'vBMPDESCER'},{av:'gx.fn.getCtrlProperty("vBMPDESCER","Tooltiptext")',ctrl:'vBMPDESCER',prop:'Tooltiptext'},{av:'AV31BmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A9433MovEstFinDescricao',fld:'MOVESTFINDESCRICAO'},{av:'A9435MovEstFinTipo',fld:'MOVESTFINTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV33RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV33RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV33RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'A9443MovEstFinId',fld:'MOVESTFINID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A9443MovEstFinId',fld:'MOVESTFINID'},{av:'AV33RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'A9443MovEstFinId',fld:'MOVESTFINID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV33RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'A9443MovEstFinId',fld:'MOVESTFINID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A9443MovEstFinId',fld:'MOVESTFINID'},{av:'AV33RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'A9434MovEstFinOrdem',fld:'MOVESTFINORDEM'}],[]];
   this.EvtParms["'DESCER'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'A9434MovEstFinOrdem',fld:'MOVESTFINORDEM'}],[]];
   this.EvtParms["'MOVESTFINFILTROS'"] = [[{av:'A9435MovEstFinTipo',fld:'MOVESTFINTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32RelEstFinId',fld:'vRELESTFINID'},{av:'AV33RelEstFinDescricao',fld:'vRELESTFINDESCRICAO'},{av:'A9443MovEstFinId',fld:'MOVESTFINID'},{av:'A9433MovEstFinDescricao',fld:'MOVESTFINDESCRICAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV28bmpSubir", rfrProp:"Value", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV28bmpSubir", rfrProp:"Tooltiptext", gxAttId:"Bmpsubir"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpDescer", rfrProp:"Value", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpDescer", rfrProp:"Tooltiptext", gxAttId:"Bmpdescer"});
   GridContainer.addRefreshingVar({rfrVar:"AV31BmpItens", rfrProp:"Value", gxAttId:"Bmpitens"});
   GridContainer.addRefreshingVar({rfrVar:"AV31BmpItens", rfrProp:"Tooltiptext", gxAttId:"Bmpitens"});
   GridContainer.addRefreshingVar({rfrVar:"AV36SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV40Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A9433MovEstFinDescricao", rfrProp:"Value", gxAttId:"9433"});
   GridContainer.addRefreshingVar({rfrVar:"A9435MovEstFinTipo", rfrProp:"Value", gxAttId:"9435"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmovestfin());
