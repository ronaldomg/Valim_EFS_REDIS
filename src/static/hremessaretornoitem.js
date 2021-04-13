/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:43.67
*/
gx.evt.autoSkip = false;
gx.define('hremessaretornoitem', false, function () {
   this.ServerClass =  "hremessaretornoitem" ;
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
      this.A2801RemessaRetornoItemConteudo=gx.fn.getControlValue("REMESSARETORNOITEMCONTEUDO") ;
      this.AV32RemessaRetornoTamanho=gx.fn.getIntegerValue("vREMESSARETORNOTAMANHO",'.') ;
      this.AV35RemessaRetornoTipo=gx.fn.getControlValue("vREMESSARETORNOTIPO") ;
   };
   this.e11j12_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12j12_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16j12_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13j12_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14j12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15j12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e20j12_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21j12_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22j12_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23j12_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e24j12_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e25j12_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e26j12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e27j12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28j12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hremessaretornoitem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Descricao",47,"vDESCRICAO","","","Descricao","svchar",0,"px",80,80,"left",null,[],"Descricao","Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2798,48,"REMESSARETORNOITEMSEQUENCIA","","","RemessaRetornoItemSequencia","int",0,"px",4,4,"right",null,[],2798,"RemessaRetornoItemSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2799,49,"REMESSARETORNOITEMTIPO","Tipo","RemessaRetornoItemTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpcop","vBMPCOP",50,0,"px",17,"px","e25j12_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e20j12_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e21j12_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e22j12_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsob","vBMPSOB",54,0,"px",17,"px","e23j12_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",55,0,"px",17,"px","e24j12_client","","Desce","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREMESSARETORNOID",gxz:"ZV28RemessaRetornoId",gxold:"OV28RemessaRetornoId",gxvar:"AV28RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vREMESSARETORNOID",gx.O.AV28RemessaRetornoId,0)},c2v:function(){gx.O.AV28RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV29RemessaRetornoDescricao",gxold:"OV29RemessaRetornoDescricao",gxvar:"AV29RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV29RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV29RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV29RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
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
   GXValidFnc[47]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:0,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV27Descricao",gxold:"OV27Descricao",gxvar:"AV27Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV27Descricao=Value},v2z:function(Value){gx.O.ZV27Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.AV27Descricao,0)},c2v:function(){gx.O.AV27Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMSEQUENCIA",gxz:"Z2798RemessaRetornoItemSequencia",gxold:"O2798RemessaRetornoItemSequencia",gxvar:"A2798RemessaRetornoItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2798RemessaRetornoItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2798RemessaRetornoItemSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(46),gx.O.A2798RemessaRetornoItemSequencia,0)},c2v:function(){gx.O.A2798RemessaRetornoItemSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMTIPO",gxz:"Z2799RemessaRetornoItemTipo",gxold:"O2799RemessaRetornoItemTipo",gxvar:"A2799RemessaRetornoItemTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2799RemessaRetornoItemTipo=Value},v2z:function(Value){gx.O.Z2799RemessaRetornoItemTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("REMESSARETORNOITEMTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A2799RemessaRetornoItemTipo)},c2v:function(){gx.O.A2799RemessaRetornoItemTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOITEMTIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOP",gxz:"ZV36bmpCop",gxold:"OV36bmpCop",gxvar:"AV36bmpCop",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpCop=Value},v2z:function(Value){gx.O.ZV36bmpCop=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOP",row || gx.fn.currentGridRowImpl(46),gx.O.AV36bmpCop,gx.O.AV42Bmpcop_GXI)},c2v:function(){gx.O.AV42Bmpcop_GXI=this.val_GXI();gx.O.AV36bmpCop=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOP",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOP_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV42Bmpcop_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOB",gxz:"ZV30bmpSob",gxold:"OV30bmpSob",gxvar:"AV30bmpSob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpSob=Value},v2z:function(Value){gx.O.ZV30bmpSob=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOB",row || gx.fn.currentGridRowImpl(46),gx.O.AV30bmpSob,gx.O.AV46Bmpsob_GXI)},c2v:function(){gx.O.AV46Bmpsob_GXI=this.val_GXI();gx.O.AV30bmpSob=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOB",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOB_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV46Bmpsob_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV31bmpDesc",gxold:"OV31bmpDesc",gxvar:"AV31bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpDesc=Value},v2z:function(Value){gx.O.ZV31bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(46),gx.O.AV31bmpDesc,gx.O.AV47Bmpdesc_GXI)},c2v:function(){gx.O.AV47Bmpdesc_GXI=this.val_GXI();gx.O.AV31bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV47Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28RemessaRetornoId = 0 ;
   this.ZV28RemessaRetornoId = 0 ;
   this.OV28RemessaRetornoId = 0 ;
   this.AV29RemessaRetornoDescricao = "" ;
   this.ZV29RemessaRetornoDescricao = "" ;
   this.OV29RemessaRetornoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV27Descricao = "" ;
   this.OV27Descricao = "" ;
   this.Z2798RemessaRetornoItemSequencia = 0 ;
   this.O2798RemessaRetornoItemSequencia = 0 ;
   this.Z2799RemessaRetornoItemTipo = "" ;
   this.O2799RemessaRetornoItemTipo = "" ;
   this.ZV36bmpCop = "" ;
   this.OV36bmpCop = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV30bmpSob = "" ;
   this.OV30bmpSob = "" ;
   this.ZV31bmpDesc = "" ;
   this.OV31bmpDesc = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28RemessaRetornoId = 0 ;
   this.AV29RemessaRetornoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV32RemessaRetornoTamanho = 0 ;
   this.AV35RemessaRetornoTipo = "" ;
   this.A2801RemessaRetornoItemConteudo = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.AV27Descricao = "" ;
   this.A2798RemessaRetornoItemSequencia = 0 ;
   this.A2799RemessaRetornoItemTipo = "" ;
   this.AV36bmpCop = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV30bmpSob = "" ;
   this.AV31bmpDesc = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV37SnRecuperaFiltro = "" ;
   this.Events = {"e11j12_client": ["'ANTERIOR'", true] ,"e12j12_client": ["'PROXIMO'", true] ,"e16j12_client": ["VPAGINA.CLICK", true] ,"e13j12_client": ["'NOVO'", true] ,"e14j12_client": ["'FECHAR'", true] ,"e15j12_client": ["'PROCURAR'", true] ,"e20j12_client": ["'ALTERAR'", true] ,"e21j12_client": ["'EXCLUIR'", true] ,"e22j12_client": ["'CONSULTAR'", true] ,"e23j12_client": ["'SUBIR'", true] ,"e24j12_client": ["'DESCER'", true] ,"e25j12_client": ["'DUPLICAR'", true] ,"e26j12_client": ["'ATUALIZAPAGINA'", true] ,"e27j12_client": ["ENTER", true] ,"e28j12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}],[{ctrl:'vDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Title")',ctrl:'vDESCRICAO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'REMESSARETORNOITEMSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOITEMSEQUENCIA","Title")',ctrl:'REMESSARETORNOITEMSEQUENCIA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}],[{av:'AV27Descricao',fld:'vDESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'A2799RemessaRetornoItemTipo',fld:'REMESSARETORNOITEMTIPO'},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV34MsgmErro',fld:'vMSGMERRO'},{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'AV32RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV29RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO',hsh:true},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'A2799RemessaRetornoItemTipo',fld:'REMESSARETORNOITEMTIPO'},{av:'AV33MsgRetorno',fld:'vMSGRETORNO'}],[{av:'AV33MsgRetorno',fld:'vMSGRETORNO'}]];
   this.EvtParms["'DESCER'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'A2799RemessaRetornoItemTipo',fld:'REMESSARETORNOITEMTIPO'}],[{av:'AV33MsgRetorno',fld:'vMSGRETORNO'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true}],[{av:'AV35RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO',hsh:true},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28RemessaRetornoId',fld:'vREMESSARETORNOID',hsh:true},{av:'AV36bmpCop',fld:'vBMPCOP'},{av:'gx.fn.getCtrlProperty("vBMPCOP","Tooltiptext")',ctrl:'vBMPCOP',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpSob',fld:'vBMPSOB'},{av:'gx.fn.getCtrlProperty("vBMPSOB","Tooltiptext")',ctrl:'vBMPSOB',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2801RemessaRetornoItemConteudo", "REMESSARETORNOITEMCONTEUDO", 0, "svchar");
   this.setVCMap("AV32RemessaRetornoTamanho", "vREMESSARETORNOTAMANHO", 0, "int");
   this.setVCMap("AV35RemessaRetornoTipo", "vREMESSARETORNOTIPO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2801RemessaRetornoItemConteudo", "REMESSARETORNOITEMCONTEUDO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpCop", rfrProp:"Value", gxAttId:"Bmpcop"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpCop", rfrProp:"Tooltiptext", gxAttId:"Bmpcop"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpSob", rfrProp:"Value", gxAttId:"Bmpsob"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpSob", rfrProp:"Tooltiptext", gxAttId:"Bmpsob"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDesc", rfrProp:"Tooltiptext", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV37SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"A2801RemessaRetornoItemConteudo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hremessaretornoitem());
