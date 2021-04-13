/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:26.34
*/
gx.evt.autoSkip = false;
gx.define('hequipamentos', false, function () {
   this.ServerClass =  "hequipamentos" ;
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
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11y82_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12y82_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17y82_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13y82_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14y82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15y82_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16y82_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21y82_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22y82_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23y82_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24y82_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25y82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26y82_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,33,36,39,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,67,68,69,70,77];
   this.GXLastCtrlId =77;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hequipamentos",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6532,59,"EQUIPAMENTONUMEROLOJA","","","EquipamentoNumeroLoja","int",0,"px",4,4,"right",null,[],6532,"EquipamentoNumeroLoja",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6533,60,"EQUIPAMENTOSEQUENCIAECF","","","EquipamentoSequenciaECF","int",0,"px",3,3,"right",null,[],6533,"EquipamentoSequenciaECF",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6524,61,"EQUIPAMENTONUMEROSERIE","","","EquipamentoNumeroSerie","svchar",0,"px",20,20,"left",null,[],6524,"EquipamentoNumeroSerie",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6525,62,"EQUIPAMENTONUMINTERVENCAO","","","EquipamentoNumIntervencao","int",0,"px",6,6,"right",null,[],6525,"EquipamentoNumIntervencao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6526,63,"EQUIPAMENTONUMEROUSUARIOECF","","","EquipamentoNumeroUsuarioECF","int",0,"px",10,10,"right",null,[],6526,"EquipamentoNumeroUsuarioECF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6527,64,"EQUIPAMENTOLETRAMFADICIONALECF","","","EquipamentoLetraMFAdicionalECF","char",0,"px",1,1,"left",null,[],6527,"EquipamentoLetraMFAdicionalECF",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6528,65,"EQUIPAMENTOMODELOECF","","","EquipamentoModeloECF","svchar",0,"px",20,20,"left",null,[],6528,"EquipamentoModeloECF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpissqn","vBMPISSQN",66,0,"px",17,"px",null,"","Desconto ISSQN","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(6529,67,"EQUIPAMENTODESCONTOISSQNECF","Incide desconto do ISSQN","","EquipamentoDescontoISSQNECF","char",0,"px",1,1,"left",null,[],6529,"EquipamentoDescontoISSQNECF",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",68,0,"px",17,"px","e21y82_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",69,0,"px",17,"px","e22y82_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",70,0,"px",17,"px","e23y82_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTONUMEROLOJA",gxz:"ZV27EquipamentoNumeroLoja",gxold:"OV27EquipamentoNumeroLoja",gxvar:"AV27EquipamentoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EquipamentoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27EquipamentoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTONUMEROLOJA",gx.O.AV27EquipamentoNumeroLoja,0)},c2v:function(){gx.O.AV27EquipamentoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEQUIPAMENTONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTOMODELOECF",gxz:"ZV31EquipamentoModeloECF",gxold:"OV31EquipamentoModeloECF",gxvar:"AV31EquipamentoModeloECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EquipamentoModeloECF=Value},v2z:function(Value){gx.O.ZV31EquipamentoModeloECF=Value},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTOMODELOECF",gx.O.AV31EquipamentoModeloECF,0)},c2v:function(){gx.O.AV31EquipamentoModeloECF=this.val()},val:function(){return gx.fn.getControlValue("vEQUIPAMENTOMODELOECF")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTOSEQUENCIAECF",gxz:"ZV30EquipamentoSequenciaECF",gxold:"OV30EquipamentoSequenciaECF",gxvar:"AV30EquipamentoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EquipamentoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30EquipamentoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTOSEQUENCIAECF",gx.O.AV30EquipamentoSequenciaECF,0)},c2v:function(){gx.O.AV30EquipamentoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEQUIPAMENTOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTONUMEROSERIE",gxz:"ZV28EquipamentoNumeroSerie",gxold:"OV28EquipamentoNumeroSerie",gxvar:"AV28EquipamentoNumeroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EquipamentoNumeroSerie=Value},v2z:function(Value){gx.O.ZV28EquipamentoNumeroSerie=Value},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTONUMEROSERIE",gx.O.AV28EquipamentoNumeroSerie,0)},c2v:function(){gx.O.AV28EquipamentoNumeroSerie=this.val()},val:function(){return gx.fn.getControlValue("vEQUIPAMENTONUMEROSERIE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE1",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"IMAGE1",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROLOJA",gxz:"Z6532EquipamentoNumeroLoja",gxold:"O6532EquipamentoNumeroLoja",gxvar:"A6532EquipamentoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6532EquipamentoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6532EquipamentoNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTONUMEROLOJA",row || gx.fn.currentGridRowImpl(58),gx.O.A6532EquipamentoNumeroLoja,0)},c2v:function(){gx.O.A6532EquipamentoNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EQUIPAMENTONUMEROLOJA",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTOSEQUENCIAECF",gxz:"Z6533EquipamentoSequenciaECF",gxold:"O6533EquipamentoSequenciaECF",gxvar:"A6533EquipamentoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6533EquipamentoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6533EquipamentoSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(58),gx.O.A6533EquipamentoSequenciaECF,0)},c2v:function(){gx.O.A6533EquipamentoSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EQUIPAMENTOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROSERIE",gxz:"Z6524EquipamentoNumeroSerie",gxold:"O6524EquipamentoNumeroSerie",gxvar:"A6524EquipamentoNumeroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6524EquipamentoNumeroSerie=Value},v2z:function(Value){gx.O.Z6524EquipamentoNumeroSerie=Value},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTONUMEROSERIE",row || gx.fn.currentGridRowImpl(58),gx.O.A6524EquipamentoNumeroSerie,0)},c2v:function(){gx.O.A6524EquipamentoNumeroSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("EQUIPAMENTONUMEROSERIE",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMINTERVENCAO",gxz:"Z6525EquipamentoNumIntervencao",gxold:"O6525EquipamentoNumIntervencao",gxvar:"A6525EquipamentoNumIntervencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6525EquipamentoNumIntervencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6525EquipamentoNumIntervencao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTONUMINTERVENCAO",row || gx.fn.currentGridRowImpl(58),gx.O.A6525EquipamentoNumIntervencao,0)},c2v:function(){gx.O.A6525EquipamentoNumIntervencao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EQUIPAMENTONUMINTERVENCAO",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROUSUARIOECF",gxz:"Z6526EquipamentoNumeroUsuarioECF",gxold:"O6526EquipamentoNumeroUsuarioECF",gxvar:"A6526EquipamentoNumeroUsuarioECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6526EquipamentoNumeroUsuarioECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6526EquipamentoNumeroUsuarioECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTONUMEROUSUARIOECF",row || gx.fn.currentGridRowImpl(58),gx.O.A6526EquipamentoNumeroUsuarioECF,0)},c2v:function(){gx.O.A6526EquipamentoNumeroUsuarioECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EQUIPAMENTONUMEROUSUARIOECF",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTOLETRAMFADICIONALECF",gxz:"Z6527EquipamentoLetraMFAdicionalECF",gxold:"O6527EquipamentoLetraMFAdicionalECF",gxvar:"A6527EquipamentoLetraMFAdicionalECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6527EquipamentoLetraMFAdicionalECF=Value},v2z:function(Value){gx.O.Z6527EquipamentoLetraMFAdicionalECF=Value},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTOLETRAMFADICIONALECF",row || gx.fn.currentGridRowImpl(58),gx.O.A6527EquipamentoLetraMFAdicionalECF,0)},c2v:function(){gx.O.A6527EquipamentoLetraMFAdicionalECF=this.val()},val:function(row){return gx.fn.getGridControlValue("EQUIPAMENTOLETRAMFADICIONALECF",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTOMODELOECF",gxz:"Z6528EquipamentoModeloECF",gxold:"O6528EquipamentoModeloECF",gxvar:"A6528EquipamentoModeloECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6528EquipamentoModeloECF=Value},v2z:function(Value){gx.O.Z6528EquipamentoModeloECF=Value},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTOMODELOECF",row || gx.fn.currentGridRowImpl(58),gx.O.A6528EquipamentoModeloECF,0)},c2v:function(){gx.O.A6528EquipamentoModeloECF=this.val()},val:function(row){return gx.fn.getGridControlValue("EQUIPAMENTOMODELOECF",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPISSQN",gxz:"ZV33bmpIssqn",gxold:"OV33bmpIssqn",gxvar:"AV33bmpIssqn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpIssqn=Value},v2z:function(Value){gx.O.ZV33bmpIssqn=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPISSQN",row || gx.fn.currentGridRowImpl(58),gx.O.AV33bmpIssqn,gx.O.AV42Bmpissqn_GXI)},c2v:function(){gx.O.AV42Bmpissqn_GXI=this.val_GXI();gx.O.AV33bmpIssqn=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPISSQN",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPISSQN_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV42Bmpissqn_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTODESCONTOISSQNECF",gxz:"Z6529EquipamentoDescontoISSQNECF",gxold:"O6529EquipamentoDescontoISSQNECF",gxvar:"A6529EquipamentoDescontoISSQNECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6529EquipamentoDescontoISSQNECF=Value},v2z:function(Value){gx.O.Z6529EquipamentoDescontoISSQNECF=Value},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTODESCONTOISSQNECF",row || gx.fn.currentGridRowImpl(58),gx.O.A6529EquipamentoDescontoISSQNECF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6529EquipamentoDescontoISSQNECF=this.val()},val:function(row){return gx.fn.getGridControlValue("EQUIPAMENTODESCONTOISSQNECF",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27EquipamentoNumeroLoja = 0 ;
   this.ZV27EquipamentoNumeroLoja = 0 ;
   this.OV27EquipamentoNumeroLoja = 0 ;
   this.AV31EquipamentoModeloECF = "" ;
   this.ZV31EquipamentoModeloECF = "" ;
   this.OV31EquipamentoModeloECF = "" ;
   this.AV30EquipamentoSequenciaECF = 0 ;
   this.ZV30EquipamentoSequenciaECF = 0 ;
   this.OV30EquipamentoSequenciaECF = 0 ;
   this.AV28EquipamentoNumeroSerie = "" ;
   this.ZV28EquipamentoNumeroSerie = "" ;
   this.OV28EquipamentoNumeroSerie = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z6532EquipamentoNumeroLoja = 0 ;
   this.O6532EquipamentoNumeroLoja = 0 ;
   this.Z6533EquipamentoSequenciaECF = 0 ;
   this.O6533EquipamentoSequenciaECF = 0 ;
   this.Z6524EquipamentoNumeroSerie = "" ;
   this.O6524EquipamentoNumeroSerie = "" ;
   this.Z6525EquipamentoNumIntervencao = 0 ;
   this.O6525EquipamentoNumIntervencao = 0 ;
   this.Z6526EquipamentoNumeroUsuarioECF = 0 ;
   this.O6526EquipamentoNumeroUsuarioECF = 0 ;
   this.Z6527EquipamentoLetraMFAdicionalECF = "" ;
   this.O6527EquipamentoLetraMFAdicionalECF = "" ;
   this.Z6528EquipamentoModeloECF = "" ;
   this.O6528EquipamentoModeloECF = "" ;
   this.ZV33bmpIssqn = "" ;
   this.OV33bmpIssqn = "" ;
   this.Z6529EquipamentoDescontoISSQNECF = "" ;
   this.O6529EquipamentoDescontoISSQNECF = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27EquipamentoNumeroLoja = 0 ;
   this.AV31EquipamentoModeloECF = "" ;
   this.AV30EquipamentoSequenciaECF = 0 ;
   this.AV28EquipamentoNumeroSerie = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A6532EquipamentoNumeroLoja = 0 ;
   this.A6533EquipamentoSequenciaECF = 0 ;
   this.A6524EquipamentoNumeroSerie = "" ;
   this.A6525EquipamentoNumIntervencao = 0 ;
   this.A6526EquipamentoNumeroUsuarioECF = 0 ;
   this.A6527EquipamentoLetraMFAdicionalECF = "" ;
   this.A6528EquipamentoModeloECF = "" ;
   this.AV33bmpIssqn = "" ;
   this.A6529EquipamentoDescontoISSQNECF = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.AV37Pgmname = "" ;
   this.Events = {"e11y82_client": ["'ANTERIOR'", true] ,"e12y82_client": ["'PROXIMO'", true] ,"e17y82_client": ["VPAGINA.CLICK", true] ,"e13y82_client": ["'NOVO'", true] ,"e14y82_client": ["'FECHAR'", true] ,"e15y82_client": ["'IMPRIMIR'", true] ,"e16y82_client": ["'PROCURAR'", true] ,"e21y82_client": ["'ALTERAR'", true] ,"e22y82_client": ["'EXCLUIR'", true] ,"e23y82_client": ["'CONSULTAR'", true] ,"e24y82_client": ["'ATUALIZAPAGINA'", true] ,"e25y82_client": ["ENTER", true] ,"e26y82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'}],[{av:'AV33bmpIssqn',fld:'vBMPISSQN'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'}],[{ctrl:'EQUIPAMENTONUMEROLOJA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTONUMEROLOJA","Title")',ctrl:'EQUIPAMENTONUMEROLOJA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'EQUIPAMENTOSEQUENCIAECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTOSEQUENCIAECF","Title")',ctrl:'EQUIPAMENTOSEQUENCIAECF',prop:'Title'},{ctrl:'EQUIPAMENTONUMEROSERIE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTONUMEROSERIE","Title")',ctrl:'EQUIPAMENTONUMEROSERIE',prop:'Title'},{ctrl:'EQUIPAMENTONUMINTERVENCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTONUMINTERVENCAO","Title")',ctrl:'EQUIPAMENTONUMINTERVENCAO',prop:'Title'},{ctrl:'EQUIPAMENTONUMEROUSUARIOECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTONUMEROUSUARIOECF","Title")',ctrl:'EQUIPAMENTONUMEROUSUARIOECF',prop:'Title'},{ctrl:'EQUIPAMENTOLETRAMFADICIONALECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTOLETRAMFADICIONALECF","Title")',ctrl:'EQUIPAMENTOLETRAMFADICIONALECF',prop:'Title'},{ctrl:'EQUIPAMENTOMODELOECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTOMODELOECF","Title")',ctrl:'EQUIPAMENTOMODELOECF',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV38Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A6532EquipamentoNumeroLoja',fld:'EQUIPAMENTONUMEROLOJA'},{av:'A6533EquipamentoSequenciaECF',fld:'EQUIPAMENTOSEQUENCIAECF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A6533EquipamentoSequenciaECF',fld:'EQUIPAMENTOSEQUENCIAECF'},{av:'A6532EquipamentoNumeroLoja',fld:'EQUIPAMENTONUMEROLOJA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A6532EquipamentoNumeroLoja',fld:'EQUIPAMENTONUMEROLOJA'},{av:'A6533EquipamentoSequenciaECF',fld:'EQUIPAMENTOSEQUENCIAECF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A6533EquipamentoSequenciaECF',fld:'EQUIPAMENTOSEQUENCIAECF'},{av:'A6532EquipamentoNumeroLoja',fld:'EQUIPAMENTONUMEROLOJA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A6532EquipamentoNumeroLoja',fld:'EQUIPAMENTONUMEROLOJA'},{av:'A6533EquipamentoSequenciaECF',fld:'EQUIPAMENTOSEQUENCIAECF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A6533EquipamentoSequenciaECF',fld:'EQUIPAMENTOSEQUENCIAECF'},{av:'A6532EquipamentoNumeroLoja',fld:'EQUIPAMENTONUMEROLOJA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV31EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV30EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV28EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A6529EquipamentoDescontoISSQNECF',fld:'EQUIPAMENTODESCONTOISSQNECF'}],[]];
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV37Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A6529EquipamentoDescontoISSQNECF", rfrProp:"Value", gxAttId:"6529"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hequipamentos());
