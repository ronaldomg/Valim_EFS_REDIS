/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:22.15
*/
gx.evt.autoSkip = false;
gx.define('hparametrofcxaliquota', false, function () {
   this.ServerClass =  "hparametrofcxaliquota" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV32Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11wo2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12wo2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16wo2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13wo2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14wo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15wo2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e19wo2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20wo2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21wo2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23wo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e24wo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hparametrofcxaliquota",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5836,47,"PARAMETROFCXID","Sequência do Parâmetro","","ParametroFcxId","int",0,"px",1,1,"right",null,[],5836,"ParametroFcxId",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(5844,48,"PARAMETROFCXALIQUOTATPTRIB","Tipo Tributação","ParametroFcxAliquotaTpTrib","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(5845,49,"PARAMETROFCXALIQUOTAPERCENTUAL","Alíquota","","ParametroFcxAliquotaPercentual","decimal",0,"px",6,6,"right",null,[],5845,"ParametroFcxAliquotaPercentual",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5839,50,"PARAMETROFCXALIQUOTASTTRICODIG","CST","","ParametroFcxAliquotaStTriCodig","char",0,"px",4,4,"left",null,[],5839,"ParametroFcxAliquotaStTriCodig",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5840,51,"PARAMETROFCXALIQUOTACFOPCODIGO","CFOP","","ParametroFcxAliquotaCFOPCodigo","int",0,"px",4,4,"right",null,[],5840,"ParametroFcxAliquotaCFOPCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e19wo2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e20wo2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e21wo2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5837,55,"PARAMETROFCXALIQUOTASTTRITIPO","Tipo da Situação Tributária","","ParametroFcxAliquotaStTriTipo","char",0,"px",1,1,"left",null,[],5837,"ParametroFcxAliquotaStTriTipo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROFCXID",gxz:"ZV28ParametroFcxId",gxold:"OV28ParametroFcxId",gxvar:"AV28ParametroFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ParametroFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ParametroFcxId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPARAMETROFCXID",gx.O.AV28ParametroFcxId,0)},c2v:function(){gx.O.AV28ParametroFcxId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARAMETROFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROFCXDESC",gxz:"ZV27ParametroFcxDesc",gxold:"OV27ParametroFcxDesc",gxvar:"AV27ParametroFcxDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ParametroFcxDesc=Value},v2z:function(Value){gx.O.ZV27ParametroFcxDesc=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROFCXDESC",gx.O.AV27ParametroFcxDesc,0)},c2v:function(){gx.O.AV27ParametroFcxDesc=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROFCXDESC")},nac:gx.falseFn};
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
   GXValidFnc[47]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXID",gxz:"Z5836ParametroFcxId",gxold:"O5836ParametroFcxId",gxvar:"A5836ParametroFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5836ParametroFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5836ParametroFcxId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARAMETROFCXID",row || gx.fn.currentGridRowImpl(46),gx.O.A5836ParametroFcxId,0)},c2v:function(){gx.O.A5836ParametroFcxId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROFCXID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTATPTRIB",gxz:"Z5844ParametroFcxAliquotaTpTrib",gxold:"O5844ParametroFcxAliquotaTpTrib",gxvar:"A5844ParametroFcxAliquotaTpTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5844ParametroFcxAliquotaTpTrib=Value},v2z:function(Value){gx.O.Z5844ParametroFcxAliquotaTpTrib=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PARAMETROFCXALIQUOTATPTRIB",row || gx.fn.currentGridRowImpl(46),gx.O.A5844ParametroFcxAliquotaTpTrib)},c2v:function(){gx.O.A5844ParametroFcxAliquotaTpTrib=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROFCXALIQUOTATPTRIB",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTAPERCENTUAL",gxz:"Z5845ParametroFcxAliquotaPercentual",gxold:"O5845ParametroFcxAliquotaPercentual",gxvar:"A5845ParametroFcxAliquotaPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5845ParametroFcxAliquotaPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5845ParametroFcxAliquotaPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PARAMETROFCXALIQUOTAPERCENTUAL",row || gx.fn.currentGridRowImpl(46),gx.O.A5845ParametroFcxAliquotaPercentual,2,',')},c2v:function(){gx.O.A5845ParametroFcxAliquotaPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PARAMETROFCXALIQUOTAPERCENTUAL",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTASTTRICODIG",gxz:"Z5839ParametroFcxAliquotaStTriCodig",gxold:"O5839ParametroFcxAliquotaStTriCodig",gxvar:"A5839ParametroFcxAliquotaStTriCodig",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5839ParametroFcxAliquotaStTriCodig=Value},v2z:function(Value){gx.O.Z5839ParametroFcxAliquotaStTriCodig=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROFCXALIQUOTASTTRICODIG",row || gx.fn.currentGridRowImpl(46),gx.O.A5839ParametroFcxAliquotaStTriCodig,0)},c2v:function(){gx.O.A5839ParametroFcxAliquotaStTriCodig=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROFCXALIQUOTASTTRICODIG",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTACFOPCODIGO",gxz:"Z5840ParametroFcxAliquotaCFOPCodigo",gxold:"O5840ParametroFcxAliquotaCFOPCodigo",gxvar:"A5840ParametroFcxAliquotaCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5840ParametroFcxAliquotaCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5840ParametroFcxAliquotaCFOPCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARAMETROFCXALIQUOTACFOPCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A5840ParametroFcxAliquotaCFOPCodigo,0)},c2v:function(){gx.O.A5840ParametroFcxAliquotaCFOPCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROFCXALIQUOTACFOPCODIGO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXALIQUOTASTTRITIPO",gxz:"Z5837ParametroFcxAliquotaStTriTipo",gxold:"O5837ParametroFcxAliquotaStTriTipo",gxvar:"A5837ParametroFcxAliquotaStTriTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5837ParametroFcxAliquotaStTriTipo=Value},v2z:function(Value){gx.O.Z5837ParametroFcxAliquotaStTriTipo=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROFCXALIQUOTASTTRITIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A5837ParametroFcxAliquotaStTriTipo,0)},c2v:function(){gx.O.A5837ParametroFcxAliquotaStTriTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROFCXALIQUOTASTTRITIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   this.AV28ParametroFcxId = 0 ;
   this.ZV28ParametroFcxId = 0 ;
   this.OV28ParametroFcxId = 0 ;
   this.AV27ParametroFcxDesc = "" ;
   this.ZV27ParametroFcxDesc = "" ;
   this.OV27ParametroFcxDesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5836ParametroFcxId = 0 ;
   this.O5836ParametroFcxId = 0 ;
   this.Z5844ParametroFcxAliquotaTpTrib = "" ;
   this.O5844ParametroFcxAliquotaTpTrib = "" ;
   this.Z5845ParametroFcxAliquotaPercentual = 0 ;
   this.O5845ParametroFcxAliquotaPercentual = 0 ;
   this.Z5839ParametroFcxAliquotaStTriCodig = "" ;
   this.O5839ParametroFcxAliquotaStTriCodig = "" ;
   this.Z5840ParametroFcxAliquotaCFOPCodigo = 0 ;
   this.O5840ParametroFcxAliquotaCFOPCodigo = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5837ParametroFcxAliquotaStTriTipo = "" ;
   this.O5837ParametroFcxAliquotaStTriTipo = "" ;
   this.AV28ParametroFcxId = 0 ;
   this.AV27ParametroFcxDesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A5836ParametroFcxId = 0 ;
   this.A5844ParametroFcxAliquotaTpTrib = "" ;
   this.A5845ParametroFcxAliquotaPercentual = 0 ;
   this.A5839ParametroFcxAliquotaStTriCodig = "" ;
   this.A5840ParametroFcxAliquotaCFOPCodigo = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5837ParametroFcxAliquotaStTriTipo = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.AV32Pgmname = "" ;
   this.Events = {"e11wo2_client": ["'ANTERIOR'", true] ,"e12wo2_client": ["'PROXIMO'", true] ,"e16wo2_client": ["VPAGINA.CLICK", true] ,"e13wo2_client": ["'NOVO'", true] ,"e14wo2_client": ["'FECHAR'", true] ,"e15wo2_client": ["'PROCURAR'", true] ,"e19wo2_client": ["'ALTERAR'", true] ,"e20wo2_client": ["'EXCLUIR'", true] ,"e21wo2_client": ["'CONSULTAR'", true] ,"e23wo2_client": ["ENTER", true] ,"e24wo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'A5844ParametroFcxAliquotaTpTrib',fld:'PARAMETROFCXALIQUOTATPTRIB'},{av:'A5845ParametroFcxAliquotaPercentual',fld:'PARAMETROFCXALIQUOTAPERCENTUAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A5845ParametroFcxAliquotaPercentual',fld:'PARAMETROFCXALIQUOTAPERCENTUAL'},{av:'A5844ParametroFcxAliquotaTpTrib',fld:'PARAMETROFCXALIQUOTATPTRIB'},{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'A5844ParametroFcxAliquotaTpTrib',fld:'PARAMETROFCXALIQUOTATPTRIB'},{av:'A5845ParametroFcxAliquotaPercentual',fld:'PARAMETROFCXALIQUOTAPERCENTUAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A5845ParametroFcxAliquotaPercentual',fld:'PARAMETROFCXALIQUOTAPERCENTUAL'},{av:'A5844ParametroFcxAliquotaTpTrib',fld:'PARAMETROFCXALIQUOTATPTRIB'},{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'A5844ParametroFcxAliquotaTpTrib',fld:'PARAMETROFCXALIQUOTATPTRIB'},{av:'A5845ParametroFcxAliquotaPercentual',fld:'PARAMETROFCXALIQUOTAPERCENTUAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32Pgmname',fld:'vPGMNAME'}],[{av:'A5845ParametroFcxAliquotaPercentual',fld:'PARAMETROFCXALIQUOTAPERCENTUAL'},{av:'A5844ParametroFcxAliquotaTpTrib',fld:'PARAMETROFCXALIQUOTATPTRIB'},{av:'AV27ParametroFcxDesc',fld:'vPARAMETROFCXDESC',hsh:true},{av:'AV28ParametroFcxId',fld:'vPARAMETROFCXID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV32Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV32Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparametrofcxaliquota());
