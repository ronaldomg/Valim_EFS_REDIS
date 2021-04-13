/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:51.91
*/
gx.evt.autoSkip = false;
gx.define('hregistrartelevendaarquivo', false, function () {
   this.ServerClass =  "hregistrartelevendaarquivo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1426q2_client=function()
   {
      this.executeServerEvent("'ITENS'", true, arguments[0], false, false);
   };
   this.e1126q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1526q2_client=function()
   {
      this.executeServerEvent("'RETORNO'", true, arguments[0], false, false);
   };
   this.e1226q2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", false, null, false, false);
   };
   this.e1726q2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1826q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
   this.GXLastCtrlId =24;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrartelevendaarquivo",[],false,1,false,true,0,false,false,false,"CollSdtSaida.SdtSaidaItem",0,"px","Novo registro",false,false,false,null,null,false,"AV10SdtSaida",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV106",6,"CTLSAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],"GXV106","GXV106",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV107",7,"CTLSAIDANODOCUMENTO","Número do Documento","","SaidaNoDocumento","int",0,"px",10,10,"right",null,[],"GXV107","GXV107",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV108",8,"CTLSAIDACLIENTEID","Cliente","","SaidaClienteId","int",0,"px",7,7,"right","e1526q2_client",[],"GXV108","GXV108",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV109",9,"CTLSAIDACLIENTEFANTASIA","Nome do cliente","","SaidaClienteFantasia","svchar",0,"px",60,60,"left",null,[],"GXV109","GXV109",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV10A",10,"CTLSAIDACLIENTETELEFONE","Saida Cliente Telefone","","SaidaClienteTelefone","svchar",0,"px",15,15,"left",null,[],"GXV10A","GXV10A",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10B",11,"CTLSAIDAVENDEDORID","Vendedor","","SaidaVendedorId","int",0,"px",7,7,"right",null,[],"GXV10B","GXV10B",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10C",12,"CTLSAIDAVENDEDORNOME","Filial","","SaidaVendedorNome","svchar",0,"px",40,40,"left",null,[],"GXV10C","GXV10C",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV10D",13,"CTLSAIDADATAPEDIDO","Saida Data Pedido","","SaidaDataPedido","date",0,"px",10,10,"right",null,[],"GXV10D","GXV10D",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10E",14,"CTLSAIDAHORAPEDIDO","Saida Hora Pedido","","SaidaHoraPedido","char",0,"px",5,5,"left",null,[],"GXV10E","GXV10E",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10F",15,"CTLDATAHORAINCLUSAO","Data Hora Inclusao","","DataHoraInclusao","dtime",0,"px",16,16,"right",null,[],"GXV10F","GXV10F",true,5,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpitens","vBMPITENS",16,0,"px",17,"px","e1426q2_client","","Itens","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV10H",17,"CTLSAIDADATAENTREGA","Saida Data Entrega","","SaidaDataEntrega","date",0,"px",10,10,"right",null,[],"GXV10H","GXV10H",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10I",18,"CTLSAIDAHORAENTREGA","Saida Hora Entrega","","SaidaHoraEntrega","char",0,"px",5,5,"left",null,[],"GXV10I","GXV10I",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10J",19,"CTLSAIDASNENTREGUE","Saida Sn Entregue","","SaidaSnEntregue","char",0,"px",1,1,"left",null,[],"GXV10J","GXV10J",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10K",20,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV10K","GXV10K",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10L",21,"CTLPESSOANUMEROEND","Número","","PessoaNumeroEnd","int",0,"px",7,7,"right",null,[],"GXV10L","GXV10L",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10M",22,"CTLPESSOACOMPLEMENTO","Complemento","","PessoaComplemento","svchar",0,"px",15,15,"left",null,[],"GXV10M","GXV10M",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10N",23,"CTLSAIDAOBSERVACAO","Observação","","SaidaObservacao","vchar",0,"px",9000,80,"left",null,[],"GXV10N","GXV10N",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10O",24,"CTLSAIDAVALORTROCO","Valor Troco","","SaidaValorTroco","decimal",0,"px",22,22,"right",null,[],"GXV10O","GXV10O",false,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAID",gxz:"ZV17GXV106",gxold:"OV17GXV106",gxvar:"GXV106",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV106=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17GXV106=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDAID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV106,0)},c2v:function(){gx.O.GXV106=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSAIDAID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDANODOCUMENTO",gxz:"ZV18GXV107",gxold:"OV18GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV107=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18GXV107=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDACLIENTEID",gxz:"ZV19GXV108",gxold:"OV19GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV108=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19GXV108=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDACLIENTEID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSAIDACLIENTEID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDACLIENTEFANTASIA",gxz:"ZV20GXV109",gxold:"OV20GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV109=Value},v2z:function(Value){gx.O.ZV20GXV109=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDACLIENTEFANTASIA",row || gx.fn.currentGridRowImpl(5),gx.O.GXV109,0)},c2v:function(){gx.O.GXV109=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSAIDACLIENTEFANTASIA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDACLIENTETELEFONE",gxz:"ZV21GXV10A",gxold:"OV21GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10A=Value},v2z:function(Value){gx.O.ZV21GXV10A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDACLIENTETELEFONE",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSAIDACLIENTETELEFONE",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAVENDEDORID",gxz:"ZV22GXV10B",gxold:"OV22GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22GXV10B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDAVENDEDORID",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSAIDAVENDEDORID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAVENDEDORNOME",gxz:"ZV23GXV10C",gxold:"OV23GXV10C",gxvar:"GXV10C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10C=Value},v2z:function(Value){gx.O.ZV23GXV10C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDAVENDEDORNOME",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10C,0)},c2v:function(){gx.O.GXV10C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSAIDAVENDEDORNOME",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDADATAPEDIDO",gxz:"ZV24GXV10D",gxold:"OV24GXV10D",gxvar:"GXV10D",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10D=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV24GXV10D=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDADATAPEDIDO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10D,0)},c2v:function(){gx.O.GXV10D=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLSAIDADATAPEDIDO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAHORAPEDIDO",gxz:"ZV25GXV10E",gxold:"OV25GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10E=Value},v2z:function(Value){gx.O.ZV25GXV10E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDAHORAPEDIDO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10E,0)},c2v:function(){gx.O.GXV10E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSAIDAHORAPEDIDO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAHORAINCLUSAO",gxz:"ZV26GXV10F",gxold:"OV26GXV10F",gxvar:"GXV10F",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10F=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV26GXV10F=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAHORAINCLUSAO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10F,0)},c2v:function(){gx.O.GXV10F=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAHORAINCLUSAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITENS",gxz:"ZV13bmpItens",gxold:"OV13bmpItens",gxvar:"AV13bmpItens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13bmpItens=Value},v2z:function(Value){gx.O.ZV13bmpItens=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITENS",row || gx.fn.currentGridRowImpl(5),gx.O.AV13bmpItens,gx.O.AV35Bmpitens_GXI)},c2v:function(){gx.O.AV35Bmpitens_GXI=this.val_GXI();gx.O.AV13bmpItens=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITENS",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITENS_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV35Bmpitens_GXI',nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDADATAENTREGA",gxz:"ZV27GXV10H",gxold:"OV27GXV10H",gxvar:"GXV10H",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10H=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV27GXV10H=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDADATAENTREGA",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10H,0)},c2v:function(){gx.O.GXV10H=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLSAIDADATAENTREGA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAHORAENTREGA",gxz:"ZV28GXV10I",gxold:"OV28GXV10I",gxvar:"GXV10I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10I=Value},v2z:function(Value){gx.O.ZV28GXV10I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDAHORAENTREGA",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10I,0)},c2v:function(){gx.O.GXV10I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSAIDAHORAENTREGA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDASNENTREGUE",gxz:"ZV29GXV10J",gxold:"OV29GXV10J",gxvar:"GXV10J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10J=Value},v2z:function(Value){gx.O.ZV29GXV10J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDASNENTREGUE",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10J,0)},c2v:function(){gx.O.GXV10J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSAIDASNENTREGUE",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV30GXV10K",gxold:"OV30GXV10K",gxvar:"GXV10K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10K=Value},v2z:function(Value){gx.O.ZV30GXV10K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10K,0)},c2v:function(){gx.O.GXV10K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOANUMEROEND",gxz:"ZV31GXV10L",gxold:"OV31GXV10L",gxvar:"GXV10L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10L=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31GXV10L=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOANUMEROEND",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10L,0)},c2v:function(){gx.O.GXV10L=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOANUMEROEND",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOACOMPLEMENTO",gxz:"ZV32GXV10M",gxold:"OV32GXV10M",gxvar:"GXV10M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10M=Value},v2z:function(Value){gx.O.ZV32GXV10M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOACOMPLEMENTO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10M,0)},c2v:function(){gx.O.GXV10M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOACOMPLEMENTO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"vchar",len:9000,dec:0,sign:false,ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAOBSERVACAO",gxz:"ZV33GXV10N",gxold:"OV33GXV10N",gxvar:"GXV10N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10N=Value},v2z:function(Value){gx.O.ZV33GXV10N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDAOBSERVACAO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10N,0)},c2v:function(){gx.O.GXV10N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSAIDAOBSERVACAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAVALORTROCO",gxz:"ZV34GXV10O",gxold:"OV34GXV10O",gxvar:"GXV10O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10O=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV34GXV10O=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLSAIDAVALORTROCO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10O,2,',')},c2v:function(){gx.O.GXV10O=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLSAIDAVALORTROCO",row || gx.fn.currentGridRowImpl(5),'.',',')},nac:gx.falseFn};
   this.ZV17GXV106 = 0 ;
   this.OV17GXV106 = 0 ;
   this.ZV18GXV107 = 0 ;
   this.OV18GXV107 = 0 ;
   this.ZV19GXV108 = 0 ;
   this.OV19GXV108 = 0 ;
   this.ZV20GXV109 = "" ;
   this.OV20GXV109 = "" ;
   this.ZV21GXV10A = "" ;
   this.OV21GXV10A = "" ;
   this.ZV22GXV10B = 0 ;
   this.OV22GXV10B = 0 ;
   this.ZV23GXV10C = "" ;
   this.OV23GXV10C = "" ;
   this.ZV24GXV10D = gx.date.nullDate() ;
   this.OV24GXV10D = gx.date.nullDate() ;
   this.ZV25GXV10E = "" ;
   this.OV25GXV10E = "" ;
   this.ZV26GXV10F = gx.date.nullDate() ;
   this.OV26GXV10F = gx.date.nullDate() ;
   this.ZV13bmpItens = "" ;
   this.OV13bmpItens = "" ;
   this.ZV27GXV10H = gx.date.nullDate() ;
   this.OV27GXV10H = gx.date.nullDate() ;
   this.ZV28GXV10I = "" ;
   this.OV28GXV10I = "" ;
   this.ZV29GXV10J = "" ;
   this.OV29GXV10J = "" ;
   this.ZV30GXV10K = "" ;
   this.OV30GXV10K = "" ;
   this.ZV31GXV10L = 0 ;
   this.OV31GXV10L = 0 ;
   this.ZV32GXV10M = "" ;
   this.OV32GXV10M = "" ;
   this.ZV33GXV10N = "" ;
   this.OV33GXV10N = "" ;
   this.ZV34GXV10O = 0 ;
   this.OV34GXV10O = 0 ;
   this.GXV106 = 0 ;
   this.GXV107 = 0 ;
   this.GXV108 = 0 ;
   this.GXV109 = "" ;
   this.GXV10A = "" ;
   this.GXV10B = 0 ;
   this.GXV10C = "" ;
   this.GXV10D = gx.date.nullDate() ;
   this.GXV10E = "" ;
   this.GXV10F = gx.date.nullDate() ;
   this.AV13bmpItens = "" ;
   this.GXV10H = gx.date.nullDate() ;
   this.GXV10I = "" ;
   this.GXV10J = "" ;
   this.GXV10K = "" ;
   this.GXV10L = 0 ;
   this.GXV10M = "" ;
   this.GXV10N = "" ;
   this.GXV10O = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.Events = {"e1426q2_client": ["'ITENS'", true] ,"e1126q2_client": ["'FECHAR'", true] ,"e1526q2_client": ["'RETORNO'", true] ,"e1226q2_client": ["'EXCLUIR'", true] ,"e1726q2_client": ["ENTER", true] ,"e1826q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV10SdtSaida',fld:'vSDTSAIDA',grid:5},{av:'AV13bmpItens',fld:'vBMPITENS'},{av:'gx.fn.getCtrlProperty("vBMPITENS","Tooltiptext")',ctrl:'vBMPITENS',prop:'Tooltiptext'}],[]];
   this.EvtParms["'ITENS'"] = [[{av:'AV10SdtSaida',fld:'vSDTSAIDA',grid:5}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'RETORNO'"] = [[{av:'AV10SdtSaida',fld:'vSDTSAIDA',grid:5}],[]];
   this.EvtParms["'EXCLUIR'"] = [[],[{av:'AV7Arquivo',fld:'vARQUIVO'},{av:'AV41GXV5',fld:'vGXV5'}]];
   Grid1Container.addRefreshingVar({rfrVar:"AV13bmpItens", rfrProp:"Value", gxAttId:"Bmpitens"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13bmpItens", rfrProp:"Tooltiptext", gxAttId:"Bmpitens"});
   this.addGridBCProperty("Sdtsaida", ["SaidaId"], this.GXValidFnc[6], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaNoDocumento"], this.GXValidFnc[7], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaClienteId"], this.GXValidFnc[8], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaClienteFantasia"], this.GXValidFnc[9], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaClienteTelefone"], this.GXValidFnc[10], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaVendedorId"], this.GXValidFnc[11], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaVendedorNome"], this.GXValidFnc[12], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaDataPedido"], this.GXValidFnc[13], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaHoraPedido"], this.GXValidFnc[14], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["DataHoraInclusao"], this.GXValidFnc[15], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaDataEntrega"], this.GXValidFnc[17], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaHoraEntrega"], this.GXValidFnc[18], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaSnEntregue"], this.GXValidFnc[19], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["PessoaEndereco"], this.GXValidFnc[20], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["PessoaNumeroEnd"], this.GXValidFnc[21], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["PessoaComplemento"], this.GXValidFnc[22], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaObservacao"], this.GXValidFnc[23], "AV10SdtSaida");
   this.addGridBCProperty("Sdtsaida", ["SaidaValorTroco"], this.GXValidFnc[24], "AV10SdtSaida");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrartelevendaarquivo());
