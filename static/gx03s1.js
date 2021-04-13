/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:38.22
*/
gx.evt.autoSkip = false;
gx.define('gx03s1', false, function () {
   this.ServerClass =  "gx03s1" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV12pCaixaBancoEmpresaId=gx.fn.getControlValue("vPCAIXABANCOEMPRESAID") ;
      this.AV13pCaixaBancoId=gx.fn.getIntegerValue("vPCAIXABANCOID",'.') ;
   };
   this.e131kc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kc1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,57];
   this.GXLastCtrlId =57;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx03s1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1015,48,"CAIXABANCOID","Caixa/Conta Bancária","","CaixaBancoId","int",0,"px",5,5,"right",null,[],1015,"CaixaBancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1017,49,"CAIXABANCODESCRICAO","Descrição CaixaBanco","Selecionar","CaixaBancoDescricao","svchar",0,"px",25,25,"left",null,[],1017,"CaixaBancoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1018,50,"CAIXABANCOSNINTCBL","Contabiliza Lançamento","","CaixaBancoSnIntCbl","char",0,"px",1,1,"left",null,[],1018,"CaixaBancoSnIntCbl",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1016,51,"CAIXABANCOTIPO","Tipo Caixa/Banco","CaixaBancoTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1019,52,"CAIXABANCOSNATIVO","Caixa/Banco Ativo","","CaixaBancoSnAtivo","char",0,"px",1,1,"left",null,[],1019,"CaixaBancoSnAtivo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1020,53,"CAIXABANCOSNFLUXO","Apresentar Fluxo de Caixa","","CaixaBancoSnFluxo","char",0,"px",1,1,"left",null,[],1020,"CaixaBancoSnFluxo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1014,54,"CAIXABANCOEMPRESAID","Empresa","","CaixaBancoEmpresaId","char",0,"px",10,10,"left",null,[],1014,"CaixaBancoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCAIXABANCOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXABANCOID",gxz:"ZV6cCaixaBancoId",gxold:"OV6cCaixaBancoId",gxvar:"AV6cCaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCAIXABANCOID",gx.O.AV6cCaixaBancoId,0)},c2v:function(){gx.O.AV6cCaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCAIXABANCODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXABANCODESCRICAO",gxz:"ZV7cCaixaBancoDescricao",gxold:"OV7cCaixaBancoDescricao",gxvar:"AV7cCaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV7cCaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCAIXABANCODESCRICAO",gx.O.AV7cCaixaBancoDescricao,0)},c2v:function(){gx.O.AV7cCaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCAIXABANCOSNINTCBL", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXABANCOSNINTCBL",gxz:"ZV8cCaixaBancoSnIntCbl",gxold:"OV8cCaixaBancoSnIntCbl",gxvar:"AV8cCaixaBancoSnIntCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCaixaBancoSnIntCbl=Value},v2z:function(Value){gx.O.ZV8cCaixaBancoSnIntCbl=Value},v2c:function(){gx.fn.setControlValue("vCCAIXABANCOSNINTCBL",gx.O.AV8cCaixaBancoSnIntCbl,0)},c2v:function(){gx.O.AV8cCaixaBancoSnIntCbl=this.val()},val:function(){return gx.fn.getControlValue("vCCAIXABANCOSNINTCBL")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCAIXABANCOTIPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXABANCOTIPO",gxz:"ZV9cCaixaBancoTipo",gxold:"OV9cCaixaBancoTipo",gxvar:"AV9cCaixaBancoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cCaixaBancoTipo=Value},v2z:function(Value){gx.O.ZV9cCaixaBancoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCCAIXABANCOTIPO",gx.O.AV9cCaixaBancoTipo)},c2v:function(){gx.O.AV9cCaixaBancoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCCAIXABANCOTIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCAIXABANCOSNATIVO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXABANCOSNATIVO",gxz:"ZV10cCaixaBancoSnAtivo",gxold:"OV10cCaixaBancoSnAtivo",gxvar:"AV10cCaixaBancoSnAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCaixaBancoSnAtivo=Value},v2z:function(Value){gx.O.ZV10cCaixaBancoSnAtivo=Value},v2c:function(){gx.fn.setControlValue("vCCAIXABANCOSNATIVO",gx.O.AV10cCaixaBancoSnAtivo,0)},c2v:function(){gx.O.AV10cCaixaBancoSnAtivo=this.val()},val:function(){return gx.fn.getControlValue("vCCAIXABANCOSNATIVO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCAIXABANCOSNFLUXO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXABANCOSNFLUXO",gxz:"ZV11cCaixaBancoSnFluxo",gxold:"OV11cCaixaBancoSnFluxo",gxvar:"AV11cCaixaBancoSnFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCaixaBancoSnFluxo=Value},v2z:function(Value){gx.O.ZV11cCaixaBancoSnFluxo=Value},v2c:function(){gx.fn.setControlValue("vCCAIXABANCOSNFLUXO",gx.O.AV11cCaixaBancoSnFluxo,0)},c2v:function(){gx.O.AV11cCaixaBancoSnFluxo=this.val()},val:function(){return gx.fn.getControlValue("vCCAIXABANCOSNFLUXO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(46),gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOSNINTCBL",gxz:"Z1018CaixaBancoSnIntCbl",gxold:"O1018CaixaBancoSnIntCbl",gxvar:"A1018CaixaBancoSnIntCbl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1018CaixaBancoSnIntCbl=Value},v2z:function(Value){gx.O.Z1018CaixaBancoSnIntCbl=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOSNINTCBL",row || gx.fn.currentGridRowImpl(46),gx.O.A1018CaixaBancoSnIntCbl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1018CaixaBancoSnIntCbl=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOSNINTCBL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOTIPO",gxz:"Z1016CaixaBancoTipo",gxold:"O1016CaixaBancoTipo",gxvar:"A1016CaixaBancoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1016CaixaBancoTipo=Value},v2z:function(Value){gx.O.Z1016CaixaBancoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CAIXABANCOTIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A1016CaixaBancoTipo)},c2v:function(){gx.O.A1016CaixaBancoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOTIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOSNATIVO",gxz:"Z1019CaixaBancoSnAtivo",gxold:"O1019CaixaBancoSnAtivo",gxvar:"A1019CaixaBancoSnAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1019CaixaBancoSnAtivo=Value},v2z:function(Value){gx.O.Z1019CaixaBancoSnAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOSNATIVO",row || gx.fn.currentGridRowImpl(46),gx.O.A1019CaixaBancoSnAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1019CaixaBancoSnAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOSNATIVO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOSNFLUXO",gxz:"Z1020CaixaBancoSnFluxo",gxold:"O1020CaixaBancoSnFluxo",gxvar:"A1020CaixaBancoSnFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1020CaixaBancoSnFluxo=Value},v2z:function(Value){gx.O.Z1020CaixaBancoSnFluxo=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOSNFLUXO",row || gx.fn.currentGridRowImpl(46),gx.O.A1020CaixaBancoSnFluxo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1020CaixaBancoSnFluxo=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOSNFLUXO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOEMPRESAID",gxz:"Z1014CaixaBancoEmpresaId",gxold:"O1014CaixaBancoEmpresaId",gxvar:"A1014CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1014CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.Z1014CaixaBancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1014CaixaBancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1014CaixaBancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABLE4",grid:0};
   this.AV6cCaixaBancoId = 0 ;
   this.ZV6cCaixaBancoId = 0 ;
   this.OV6cCaixaBancoId = 0 ;
   this.AV7cCaixaBancoDescricao = "" ;
   this.ZV7cCaixaBancoDescricao = "" ;
   this.OV7cCaixaBancoDescricao = "" ;
   this.AV8cCaixaBancoSnIntCbl = "" ;
   this.ZV8cCaixaBancoSnIntCbl = "" ;
   this.OV8cCaixaBancoSnIntCbl = "" ;
   this.AV9cCaixaBancoTipo = "" ;
   this.ZV9cCaixaBancoTipo = "" ;
   this.OV9cCaixaBancoTipo = "" ;
   this.AV10cCaixaBancoSnAtivo = "" ;
   this.ZV10cCaixaBancoSnAtivo = "" ;
   this.OV10cCaixaBancoSnAtivo = "" ;
   this.AV11cCaixaBancoSnFluxo = "" ;
   this.ZV11cCaixaBancoSnFluxo = "" ;
   this.OV11cCaixaBancoSnFluxo = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.Z1018CaixaBancoSnIntCbl = "" ;
   this.O1018CaixaBancoSnIntCbl = "" ;
   this.Z1016CaixaBancoTipo = "" ;
   this.O1016CaixaBancoTipo = "" ;
   this.Z1019CaixaBancoSnAtivo = "" ;
   this.O1019CaixaBancoSnAtivo = "" ;
   this.Z1020CaixaBancoSnFluxo = "" ;
   this.O1020CaixaBancoSnFluxo = "" ;
   this.Z1014CaixaBancoEmpresaId = "" ;
   this.O1014CaixaBancoEmpresaId = "" ;
   this.AV6cCaixaBancoId = 0 ;
   this.AV7cCaixaBancoDescricao = "" ;
   this.AV8cCaixaBancoSnIntCbl = "" ;
   this.AV9cCaixaBancoTipo = "" ;
   this.AV10cCaixaBancoSnAtivo = "" ;
   this.AV11cCaixaBancoSnFluxo = "" ;
   this.AV12pCaixaBancoEmpresaId = "" ;
   this.AV13pCaixaBancoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1018CaixaBancoSnIntCbl = "" ;
   this.A1016CaixaBancoTipo = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A1020CaixaBancoSnFluxo = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.Events = {"e131kc2_client": ["ENTER", true] ,"e141kc1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaBancoId',fld:'vCCAIXABANCOID'},{av:'AV7cCaixaBancoDescricao',fld:'vCCAIXABANCODESCRICAO'},{av:'AV8cCaixaBancoSnIntCbl',fld:'vCCAIXABANCOSNINTCBL'},{av:'AV9cCaixaBancoTipo',fld:'vCCAIXABANCOTIPO'},{av:'AV10cCaixaBancoSnAtivo',fld:'vCCAIXABANCOSNATIVO'},{av:'AV11cCaixaBancoSnFluxo',fld:'vCCAIXABANCOSNFLUXO'},{av:'AV12pCaixaBancoEmpresaId',fld:'vPCAIXABANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'}],[{av:'AV13pCaixaBancoId',fld:'vPCAIXABANCOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaBancoId',fld:'vCCAIXABANCOID'},{av:'AV7cCaixaBancoDescricao',fld:'vCCAIXABANCODESCRICAO'},{av:'AV8cCaixaBancoSnIntCbl',fld:'vCCAIXABANCOSNINTCBL'},{av:'AV9cCaixaBancoTipo',fld:'vCCAIXABANCOTIPO'},{av:'AV10cCaixaBancoSnAtivo',fld:'vCCAIXABANCOSNATIVO'},{av:'AV11cCaixaBancoSnFluxo',fld:'vCCAIXABANCOSNFLUXO'},{av:'AV12pCaixaBancoEmpresaId',fld:'vPCAIXABANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaBancoId',fld:'vCCAIXABANCOID'},{av:'AV7cCaixaBancoDescricao',fld:'vCCAIXABANCODESCRICAO'},{av:'AV8cCaixaBancoSnIntCbl',fld:'vCCAIXABANCOSNINTCBL'},{av:'AV9cCaixaBancoTipo',fld:'vCCAIXABANCOTIPO'},{av:'AV10cCaixaBancoSnAtivo',fld:'vCCAIXABANCOSNATIVO'},{av:'AV11cCaixaBancoSnFluxo',fld:'vCCAIXABANCOSNFLUXO'},{av:'AV12pCaixaBancoEmpresaId',fld:'vPCAIXABANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaBancoId',fld:'vCCAIXABANCOID'},{av:'AV7cCaixaBancoDescricao',fld:'vCCAIXABANCODESCRICAO'},{av:'AV8cCaixaBancoSnIntCbl',fld:'vCCAIXABANCOSNINTCBL'},{av:'AV9cCaixaBancoTipo',fld:'vCCAIXABANCOTIPO'},{av:'AV10cCaixaBancoSnAtivo',fld:'vCCAIXABANCOSNATIVO'},{av:'AV11cCaixaBancoSnFluxo',fld:'vCCAIXABANCOSNFLUXO'},{av:'AV12pCaixaBancoEmpresaId',fld:'vPCAIXABANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaBancoId',fld:'vCCAIXABANCOID'},{av:'AV7cCaixaBancoDescricao',fld:'vCCAIXABANCODESCRICAO'},{av:'AV8cCaixaBancoSnIntCbl',fld:'vCCAIXABANCOSNINTCBL'},{av:'AV9cCaixaBancoTipo',fld:'vCCAIXABANCOTIPO'},{av:'AV10cCaixaBancoSnAtivo',fld:'vCCAIXABANCOSNATIVO'},{av:'AV11cCaixaBancoSnFluxo',fld:'vCCAIXABANCOSNFLUXO'},{av:'AV12pCaixaBancoEmpresaId',fld:'vPCAIXABANCOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pCaixaBancoEmpresaId", "vPCAIXABANCOEMPRESAID", 0, "char");
   this.setVCMap("AV13pCaixaBancoId", "vPCAIXABANCOID", 0, "int");
   this.setVCMap("AV12pCaixaBancoEmpresaId", "vPCAIXABANCOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pCaixaBancoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx03s1());
