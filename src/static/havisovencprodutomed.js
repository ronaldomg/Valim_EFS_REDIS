/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:7:40.14
*/
gx.evt.autoSkip = false;
gx.define('havisovencprodutomed', false, function () {
   this.ServerClass =  "havisovencprodutomed" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV43SdtAvisoVenc=gx.fn.getControlValue("vSDTAVISOVENC") ;
      this.AV46SNLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.AV21EsquemaUnico=gx.fn.getIntegerValue("vESQUEMAUNICO",'.') ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.A2919AtributoEsquemaUsuarioAlt=gx.fn.getControlValue("ATRIBUTOESQUEMAUSUARIOALT") ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
   };
   this.e112ao2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e122ao2_client=function()
   {
      this.executeServerEvent("'PRIMEIRAPAGINA'", true, null, false, false);
   };
   this.e132ao2_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, null, false, false);
   };
   this.e142ao2_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, null, false, false);
   };
   this.e152ao2_client=function()
   {
      this.executeServerEvent("'ULTIMAPAGINA'", true, null, false, false);
   };
   this.e162ao2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e192ao2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e212ao2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e222ao2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,29,32,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",8,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"havisovencprodutomed",[],false,1,true,true,0,false,false,false,"CollSdtAvisoVenc.SdtAvisoVencItem",0,"px","Novo registro",true,false,false,null,null,false,"AV43SdtAvisoVenc",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV109",9,"CTLSEQINC","Seq Inc","","SeqInc","int",0,"px",6,6,"right",null,[],"GXV109","GXV109",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10A",10,"CTLFILIALID","Filial","","FilialId","int",0,"px",7,7,"right",null,[],"GXV10A","GXV10A",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10B",11,"CTLFILIALNOME","Nome da Filial","","FilialNome","svchar",0,"px",100,80,"left",null,[],"GXV10B","GXV10B",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10C",12,"CTLPRODUTOID","Código","","ProdutoId","int",0,"px",10,10,"right",null,[],"GXV10C","GXV10C",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10D",13,"CTLPRODUTONOME","Descrição Produto","","ProdutoNome","svchar",0,"px",40,40,"left",null,[],"GXV10D","GXV10D",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10E",14,"CTLPRODUTOLOTE","Combinação Lote","","ProdutoLote","char",0,"px",20,20,"left",null,[],"GXV10E","GXV10E",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10F",15,"CTLDESCLOTE1","","","DescLote1","char",0,"px",15,15,"left",null,[],"GXV10F","GXV10F",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10G",16,"CTLDESCLOTE2","","","DescLote2","char",0,"px",15,15,"left",null,[],"GXV10G","GXV10G",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10H",17,"CTLDESCLOTE3","","","DescLote3","char",0,"px",15,15,"left",null,[],"GXV10H","GXV10H",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10I",18,"CTLDESCLOTE4","","","DescLote4","char",0,"px",15,15,"left",null,[],"GXV10I","GXV10I",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10J",19,"CTLDESCLOTE5","","","DescLote5","char",0,"px",15,15,"left",null,[],"GXV10J","GXV10J",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV10K",20,"CTLDATAENTRADA","Dt.Entrada","","DataEntrada","date",0,"px",10,10,"right",null,[],"GXV10K","GXV10K",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10L",21,"CTLDATAVALIDADE","Dt.Validade","","DataValidade","date",0,"px",10,10,"right",null,[],"GXV10L","GXV10L",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10M",22,"CTLQTDEENTRADA","Qtde Entrada","","QtdeEntrada","decimal",0,"px",21,21,"right",null,[],"GXV10M","GXV10M",false,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10N",23,"CTLSEQUENCIALOTE","Sequência","","SequenciaLote","int",0,"px",4,4,"right",null,[],"GXV10N","GXV10N",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQINC",gxz:"ZV58GXV109",gxold:"OV58GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV109=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58GXV109=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQINC",row || gx.fn.currentGridRowImpl(8),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQINC",row || gx.fn.currentGridRowImpl(8),'.')},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIALID",gxz:"ZV59GXV10A",gxold:"OV59GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV59GXV10A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFILIALID",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFILIALID",row || gx.fn.currentGridRowImpl(8),'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIALNOME",gxz:"ZV60GXV10B",gxold:"OV60GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10B=Value},v2z:function(Value){gx.O.ZV60GXV10B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFILIALNOME",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFILIALNOME",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV61GXV10C",gxold:"OV61GXV10C",gxvar:"GXV10C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61GXV10C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10C,0)},c2v:function(){gx.O.GXV10C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(8),'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTONOME",gxz:"ZV62GXV10D",gxold:"OV62GXV10D",gxvar:"GXV10D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10D=Value},v2z:function(Value){gx.O.ZV62GXV10D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTONOME",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10D,0)},c2v:function(){gx.O.GXV10D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTONOME",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOLOTE",gxz:"ZV63GXV10E",gxold:"OV63GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10E=Value},v2z:function(Value){gx.O.ZV63GXV10E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOLOTE",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10E,0)},c2v:function(){gx.O.GXV10E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOLOTE",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCLOTE1",gxz:"ZV64GXV10F",gxold:"OV64GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10F=Value},v2z:function(Value){gx.O.ZV64GXV10F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCLOTE1",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCLOTE1",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCLOTE2",gxz:"ZV65GXV10G",gxold:"OV65GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10G=Value},v2z:function(Value){gx.O.ZV65GXV10G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCLOTE2",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10G,0)},c2v:function(){gx.O.GXV10G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCLOTE2",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCLOTE3",gxz:"ZV66GXV10H",gxold:"OV66GXV10H",gxvar:"GXV10H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10H=Value},v2z:function(Value){gx.O.ZV66GXV10H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCLOTE3",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10H,0)},c2v:function(){gx.O.GXV10H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCLOTE3",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCLOTE4",gxz:"ZV67GXV10I",gxold:"OV67GXV10I",gxvar:"GXV10I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10I=Value},v2z:function(Value){gx.O.ZV67GXV10I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCLOTE4",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10I,0)},c2v:function(){gx.O.GXV10I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCLOTE4",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCLOTE5",gxz:"ZV68GXV10J",gxold:"OV68GXV10J",gxvar:"GXV10J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10J=Value},v2z:function(Value){gx.O.ZV68GXV10J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCLOTE5",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10J,0)},c2v:function(){gx.O.GXV10J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCLOTE5",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAENTRADA",gxz:"ZV69GXV10K",gxold:"OV69GXV10K",gxvar:"GXV10K",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10K=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV69GXV10K=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAENTRADA",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10K,0)},c2v:function(){gx.O.GXV10K=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAENTRADA",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAVALIDADE",gxz:"ZV70GXV10L",gxold:"OV70GXV10L",gxvar:"GXV10L",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10L=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV70GXV10L=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAVALIDADE",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10L,0)},c2v:function(){gx.O.GXV10L=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAVALIDADE",row || gx.fn.currentGridRowImpl(8))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEENTRADA",gxz:"ZV71GXV10M",gxold:"OV71GXV10M",gxvar:"GXV10M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10M=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71GXV10M=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDEENTRADA",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10M,4,',')},c2v:function(){gx.O.GXV10M=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDEENTRADA",row || gx.fn.currentGridRowImpl(8),'.',',')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:8,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQUENCIALOTE",gxz:"ZV72GXV10N",gxold:"OV72GXV10N",gxvar:"GXV10N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10N=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72GXV10N=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQUENCIALOTE",row || gx.fn.currentGridRowImpl(8),gx.O.GXV10N,0)},c2v:function(){gx.O.GXV10N=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQUENCIALOTE",row || gx.fn.currentGridRowImpl(8),'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={fld:"IMAGE1",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"IMAGE5",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV33Pagina",gxold:"OV33Pagina",gxvar:"AV33Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV33Pagina,0)},c2v:function(){gx.O.AV33Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAGINA",gxz:"ZV15CtrlPagina",gxold:"OV15CtrlPagina",gxvar:"AV15CtrlPagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CtrlPagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15CtrlPagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAGINA",gx.O.AV15CtrlPagina,0)},c2v:function(){gx.O.AV15CtrlPagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECOLUNAS",gxz:"ZV36QtdeColunas",gxold:"OV36QtdeColunas",gxvar:"AV36QtdeColunas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36QtdeColunas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36QtdeColunas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECOLUNAS",gx.O.AV36QtdeColunas,0)},c2v:function(){gx.O.AV36QtdeColunas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECOLUNAS",'.')},nac:gx.falseFn};
   this.ZV58GXV109 = 0 ;
   this.OV58GXV109 = 0 ;
   this.ZV59GXV10A = 0 ;
   this.OV59GXV10A = 0 ;
   this.ZV60GXV10B = "" ;
   this.OV60GXV10B = "" ;
   this.ZV61GXV10C = 0 ;
   this.OV61GXV10C = 0 ;
   this.ZV62GXV10D = "" ;
   this.OV62GXV10D = "" ;
   this.ZV63GXV10E = "" ;
   this.OV63GXV10E = "" ;
   this.ZV64GXV10F = "" ;
   this.OV64GXV10F = "" ;
   this.ZV65GXV10G = "" ;
   this.OV65GXV10G = "" ;
   this.ZV66GXV10H = "" ;
   this.OV66GXV10H = "" ;
   this.ZV67GXV10I = "" ;
   this.OV67GXV10I = "" ;
   this.ZV68GXV10J = "" ;
   this.OV68GXV10J = "" ;
   this.ZV69GXV10K = gx.date.nullDate() ;
   this.OV69GXV10K = gx.date.nullDate() ;
   this.ZV70GXV10L = gx.date.nullDate() ;
   this.OV70GXV10L = gx.date.nullDate() ;
   this.ZV71GXV10M = 0 ;
   this.OV71GXV10M = 0 ;
   this.ZV72GXV10N = 0 ;
   this.OV72GXV10N = 0 ;
   this.AV33Pagina = 0 ;
   this.ZV33Pagina = 0 ;
   this.OV33Pagina = 0 ;
   this.AV15CtrlPagina = 0 ;
   this.ZV15CtrlPagina = 0 ;
   this.OV15CtrlPagina = 0 ;
   this.AV36QtdeColunas = 0 ;
   this.ZV36QtdeColunas = 0 ;
   this.OV36QtdeColunas = 0 ;
   this.AV33Pagina = 0 ;
   this.AV15CtrlPagina = 0 ;
   this.AV36QtdeColunas = 0 ;
   this.GXV109 = 0 ;
   this.GXV10A = 0 ;
   this.GXV10B = "" ;
   this.GXV10C = 0 ;
   this.GXV10D = "" ;
   this.GXV10E = "" ;
   this.GXV10F = "" ;
   this.GXV10G = "" ;
   this.GXV10H = "" ;
   this.GXV10I = "" ;
   this.GXV10J = "" ;
   this.GXV10K = gx.date.nullDate() ;
   this.GXV10L = gx.date.nullDate() ;
   this.GXV10M = 0 ;
   this.GXV10N = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2919AtributoEsquemaUsuarioAlt = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.AV43SdtAvisoVenc = [ ] ;
   this.AV46SNLoteUnico = "" ;
   this.AV21EsquemaUnico = 0 ;
   this.Events = {"e112ao2_client": ["'FECHAR'", true] ,"e122ao2_client": ["'PRIMEIRAPAGINA'", true] ,"e132ao2_client": ["'PAGINAANTERIOR'", true] ,"e142ao2_client": ["'PROXIMAPAGINA'", true] ,"e152ao2_client": ["'ULTIMAPAGINA'", true] ,"e162ao2_client": ["'IMPRIMIR'", true] ,"e192ao2_client": ["'EXCLUIR'", true] ,"e212ao2_client": ["ENTER", true] ,"e222ao2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8},{av:'AV46SNLoteUnico',fld:'vSNLOTEUNICO',hsh:true},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV21EsquemaUnico',fld:'vESQUEMAUNICO',hsh:true},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV36QtdeColunas',fld:'vQTDECOLUNAS'}],[{av:'AV40Res',fld:'vRES'},{av:'AV41ResInt',fld:'vRESINT'},{av:'AV33Pagina',fld:'vPAGINA'},{ctrl:'CTLDESCLOTE1',prop:'Title'},{ctrl:'CTLDESCLOTE2',prop:'Visible'},{ctrl:'CTLDESCLOTE3',prop:'Visible'},{ctrl:'CTLDESCLOTE4',prop:'Visible'},{ctrl:'CTLDESCLOTE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'},{ctrl:'CTLDESCLOTE1',prop:'Visible'},{av:'AV14Cont',fld:'vCONT'},{ctrl:'CTLDESCLOTE2',prop:'Title'},{ctrl:'CTLDESCLOTE3',prop:'Title'},{ctrl:'CTLDESCLOTE4',prop:'Title'},{ctrl:'CTLDESCLOTE5',prop:'Title'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PRIMEIRAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8},{av:'AV46SNLoteUnico',fld:'vSNLOTEUNICO',hsh:true},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV21EsquemaUnico',fld:'vESQUEMAUNICO',hsh:true},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV36QtdeColunas',fld:'vQTDECOLUNAS'}],[{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8},{av:'AV46SNLoteUnico',fld:'vSNLOTEUNICO',hsh:true},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV21EsquemaUnico',fld:'vESQUEMAUNICO',hsh:true},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV36QtdeColunas',fld:'vQTDECOLUNAS'}],[{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8},{av:'AV46SNLoteUnico',fld:'vSNLOTEUNICO',hsh:true},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV21EsquemaUnico',fld:'vESQUEMAUNICO',hsh:true},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV36QtdeColunas',fld:'vQTDECOLUNAS'}],[{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'ULTIMAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8},{av:'AV46SNLoteUnico',fld:'vSNLOTEUNICO',hsh:true},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV21EsquemaUnico',fld:'vESQUEMAUNICO',hsh:true},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV36QtdeColunas',fld:'vQTDECOLUNAS'}],[{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV73Pgmname',fld:'vPGMNAME'},{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8},{av:'AV39QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV76Pgmdesc',fld:'vPGMDESC'}],[{av:'AV31NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV30NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8},{av:'AV22FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV35ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV46SNLoteUnico',fld:'vSNLOTEUNICO',hsh:true},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV15CtrlPagina',fld:'vCTRLPAGINA'},{av:'AV21EsquemaUnico',fld:'vESQUEMAUNICO',hsh:true},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2919AtributoEsquemaUsuarioAlt',fld:'ATRIBUTOESQUEMAUSUARIOALT'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV36QtdeColunas',fld:'vQTDECOLUNAS'}],[{av:'AV45SeqInc',fld:'vSEQINC'},{av:'AV26Index',fld:'vINDEX'},{av:'AV77GXV3',fld:'vGXV3'},{av:'AV44SdtAvisoVencItem',fld:'vSDTAVISOVENCITEM'},{av:'AV43SdtAvisoVenc',fld:'vSDTAVISOVENC',grid:8}]];
   this.setVCMap("AV43SdtAvisoVenc", "vSDTAVISOVENC", 0, "CollSdtAvisoVenc.SdtAvisoVencItem");
   this.setVCMap("AV46SNLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("AV21EsquemaUnico", "vESQUEMAUNICO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2919AtributoEsquemaUsuarioAlt", "ATRIBUTOESQUEMAUSUARIOALT", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV43SdtAvisoVenc", "vSDTAVISOVENC", 0, "CollSdtAvisoVenc.SdtAvisoVencItem");
   this.setVCMap("AV46SNLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("AV21EsquemaUnico", "vESQUEMAUNICO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2919AtributoEsquemaUsuarioAlt", "ATRIBUTOESQUEMAUSUARIOALT", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV43SdtAvisoVenc"});
   GridContainer.addRefreshingVar({rfrVar:"AV46SNLoteUnico"});
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar({rfrVar:"AV21EsquemaUnico"});
   GridContainer.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A2919AtributoEsquemaUsuarioAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.addGridBCProperty("Sdtavisovenc", ["SeqInc"], this.GXValidFnc[9], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["FilialId"], this.GXValidFnc[10], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["FilialNome"], this.GXValidFnc[11], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["ProdutoId"], this.GXValidFnc[12], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["ProdutoNome"], this.GXValidFnc[13], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["ProdutoLote"], this.GXValidFnc[14], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["DescLote1"], this.GXValidFnc[15], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["DescLote2"], this.GXValidFnc[16], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["DescLote3"], this.GXValidFnc[17], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["DescLote4"], this.GXValidFnc[18], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["DescLote5"], this.GXValidFnc[19], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["DataEntrada"], this.GXValidFnc[20], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["DataValidade"], this.GXValidFnc[21], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["QtdeEntrada"], this.GXValidFnc[22], "AV43SdtAvisoVenc");
   this.addGridBCProperty("Sdtavisovenc", ["SequenciaLote"], this.GXValidFnc[23], "AV43SdtAvisoVenc");
   this.InitStandaloneVars( );
});
gx.setParentObj(new havisovencprodutomed());
