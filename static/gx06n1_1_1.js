/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:30:11.48
*/
gx.evt.autoSkip = false;
gx.define('gx06n1_1_1', false, function () {
   this.ServerClass =  "gx06n1_1_1" ;
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
      this.AV13pCorrespondenciaAno=gx.fn.getIntegerValue("vPCORRESPONDENCIAANO",'.') ;
      this.AV12pCorrespondenciaEmpresaId=gx.fn.getControlValue("vPCORRESPONDENCIAEMPRESAID") ;
      this.AV14pCorrespondenciaProtocolo=gx.fn.getIntegerValue("vPCORRESPONDENCIAPROTOCOLO",'.') ;
   };
   this.e131m62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141m61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,57];
   this.GXLastCtrlId =57;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx06n1_1_1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2271,48,"CORRESPONDENCIAEMPRESAID","Empresa","","CorrespondenciaEmpresaId","char",0,"px",10,10,"left",null,[],2271,"CorrespondenciaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2273,49,"CORRESPONDENCIAPROTOCOLO","Número Protocolo","","CorrespondenciaProtocolo","int",0,"px",7,7,"right",null,[],2273,"CorrespondenciaProtocolo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2274,50,"CORRESPONDENCIAREMETENTE","Remetente","","CorrespondenciaRemetente","svchar",0,"px",50,50,"left",null,[],2274,"CorrespondenciaRemetente",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2275,51,"CORRESPONDENCIAIDENTIFICACAO","Identificação","Selecionar","CorrespondenciaIdentificacao","char",0,"px",10,10,"left",null,[],2275,"CorrespondenciaIdentificacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2277,52,"CORRESPONDENCIADATAHORA","Data/Hora Recebimento","","CorrespondenciaDataHora","dtime",0,"px",16,16,"right",null,[],2277,"CorrespondenciaDataHora",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2247,53,"DEPARTAMENTOEMPRESAID","Empresa","","DepartamentoEmpresaId","char",0,"px",10,10,"left",null,[],2247,"DepartamentoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2272,54,"CORRESPONDENCIAANO","Ano","","CorrespondenciaAno","int",0,"px",4,4,"right",null,[],2272,"CorrespondenciaAno",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCORRESPONDENCIAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORRESPONDENCIAEMPRESAID",gxz:"ZV6cCorrespondenciaEmpresaId",gxold:"OV6cCorrespondenciaEmpresaId",gxvar:"AV6cCorrespondenciaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCorrespondenciaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cCorrespondenciaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCORRESPONDENCIAEMPRESAID",gx.O.AV6cCorrespondenciaEmpresaId,0)},c2v:function(){gx.O.AV6cCorrespondenciaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCORRESPONDENCIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCORRESPONDENCIAPROTOCOLO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORRESPONDENCIAPROTOCOLO",gxz:"ZV7cCorrespondenciaProtocolo",gxold:"OV7cCorrespondenciaProtocolo",gxvar:"AV7cCorrespondenciaProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCorrespondenciaProtocolo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cCorrespondenciaProtocolo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCORRESPONDENCIAPROTOCOLO",gx.O.AV7cCorrespondenciaProtocolo,0)},c2v:function(){gx.O.AV7cCorrespondenciaProtocolo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCORRESPONDENCIAPROTOCOLO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCORRESPONDENCIAREMETENTE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORRESPONDENCIAREMETENTE",gxz:"ZV8cCorrespondenciaRemetente",gxold:"OV8cCorrespondenciaRemetente",gxvar:"AV8cCorrespondenciaRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCorrespondenciaRemetente=Value},v2z:function(Value){gx.O.ZV8cCorrespondenciaRemetente=Value},v2c:function(){gx.fn.setControlValue("vCCORRESPONDENCIAREMETENTE",gx.O.AV8cCorrespondenciaRemetente,0)},c2v:function(){gx.O.AV8cCorrespondenciaRemetente=this.val()},val:function(){return gx.fn.getControlValue("vCCORRESPONDENCIAREMETENTE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCORRESPONDENCIAIDENTIFICACAO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORRESPONDENCIAIDENTIFICACAO",gxz:"ZV9cCorrespondenciaIdentificacao",gxold:"OV9cCorrespondenciaIdentificacao",gxvar:"AV9cCorrespondenciaIdentificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCorrespondenciaIdentificacao=Value},v2z:function(Value){gx.O.ZV9cCorrespondenciaIdentificacao=Value},v2c:function(){gx.fn.setControlValue("vCCORRESPONDENCIAIDENTIFICACAO",gx.O.AV9cCorrespondenciaIdentificacao,0)},c2v:function(){gx.O.AV9cCorrespondenciaIdentificacao=this.val()},val:function(){return gx.fn.getControlValue("vCCORRESPONDENCIAIDENTIFICACAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCORRESPONDENCIAASSUNTO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORRESPONDENCIAASSUNTO",gxz:"ZV10cCorrespondenciaAssunto",gxold:"OV10cCorrespondenciaAssunto",gxvar:"AV10cCorrespondenciaAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCorrespondenciaAssunto=Value},v2z:function(Value){gx.O.ZV10cCorrespondenciaAssunto=Value},v2c:function(){gx.fn.setControlValue("vCCORRESPONDENCIAASSUNTO",gx.O.AV10cCorrespondenciaAssunto,0)},c2v:function(){gx.O.AV10cCorrespondenciaAssunto=this.val()},val:function(){return gx.fn.getControlValue("vCCORRESPONDENCIAASSUNTO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCORRESPONDENCIADATAHORA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORRESPONDENCIADATAHORA",gxz:"ZV11cCorrespondenciaDataHora",gxold:"OV11cCorrespondenciaDataHora",gxvar:"AV11cCorrespondenciaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cCorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCORRESPONDENCIADATAHORA",gx.O.AV11cCorrespondenciaDataHora,0)},c2v:function(){gx.O.AV11cCorrespondenciaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCCORRESPONDENCIADATAHORA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAEMPRESAID",gxz:"Z2271CorrespondenciaEmpresaId",gxold:"O2271CorrespondenciaEmpresaId",gxvar:"A2271CorrespondenciaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2271CorrespondenciaEmpresaId=Value},v2z:function(Value){gx.O.Z2271CorrespondenciaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A2271CorrespondenciaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2271CorrespondenciaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CORRESPONDENCIAEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAPROTOCOLO",gxz:"Z2273CorrespondenciaProtocolo",gxold:"O2273CorrespondenciaProtocolo",gxvar:"A2273CorrespondenciaProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2273CorrespondenciaProtocolo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2273CorrespondenciaProtocolo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAPROTOCOLO",row || gx.fn.currentGridRowImpl(46),gx.O.A2273CorrespondenciaProtocolo,0)},c2v:function(){gx.O.A2273CorrespondenciaProtocolo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CORRESPONDENCIAPROTOCOLO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAREMETENTE",gxz:"Z2274CorrespondenciaRemetente",gxold:"O2274CorrespondenciaRemetente",gxvar:"A2274CorrespondenciaRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2274CorrespondenciaRemetente=Value},v2z:function(Value){gx.O.Z2274CorrespondenciaRemetente=Value},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAREMETENTE",row || gx.fn.currentGridRowImpl(46),gx.O.A2274CorrespondenciaRemetente,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2274CorrespondenciaRemetente=this.val()},val:function(row){return gx.fn.getGridControlValue("CORRESPONDENCIAREMETENTE",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAIDENTIFICACAO",gxz:"Z2275CorrespondenciaIdentificacao",gxold:"O2275CorrespondenciaIdentificacao",gxvar:"A2275CorrespondenciaIdentificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2275CorrespondenciaIdentificacao=Value},v2z:function(Value){gx.O.Z2275CorrespondenciaIdentificacao=Value},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAIDENTIFICACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A2275CorrespondenciaIdentificacao,0)},c2v:function(){gx.O.A2275CorrespondenciaIdentificacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CORRESPONDENCIAIDENTIFICACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIADATAHORA",gxz:"Z2277CorrespondenciaDataHora",gxold:"O2277CorrespondenciaDataHora",gxvar:"A2277CorrespondenciaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIADATAHORA",row || gx.fn.currentGridRowImpl(46),gx.O.A2277CorrespondenciaDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CORRESPONDENCIADATAHORA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTOEMPRESAID",gxz:"Z2247DepartamentoEmpresaId",gxold:"O2247DepartamentoEmpresaId",gxvar:"A2247DepartamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2247DepartamentoEmpresaId=Value},v2z:function(Value){gx.O.Z2247DepartamentoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A2247DepartamentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2247DepartamentoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAANO",gxz:"Z2272CorrespondenciaAno",gxold:"O2272CorrespondenciaAno",gxvar:"A2272CorrespondenciaAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2272CorrespondenciaAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2272CorrespondenciaAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CORRESPONDENCIAANO",row || gx.fn.currentGridRowImpl(46),gx.O.A2272CorrespondenciaAno,0)},c2v:function(){gx.O.A2272CorrespondenciaAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CORRESPONDENCIAANO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TABLE4",grid:0};
   this.AV6cCorrespondenciaEmpresaId = "" ;
   this.ZV6cCorrespondenciaEmpresaId = "" ;
   this.OV6cCorrespondenciaEmpresaId = "" ;
   this.AV7cCorrespondenciaProtocolo = 0 ;
   this.ZV7cCorrespondenciaProtocolo = 0 ;
   this.OV7cCorrespondenciaProtocolo = 0 ;
   this.AV8cCorrespondenciaRemetente = "" ;
   this.ZV8cCorrespondenciaRemetente = "" ;
   this.OV8cCorrespondenciaRemetente = "" ;
   this.AV9cCorrespondenciaIdentificacao = "" ;
   this.ZV9cCorrespondenciaIdentificacao = "" ;
   this.OV9cCorrespondenciaIdentificacao = "" ;
   this.AV10cCorrespondenciaAssunto = "" ;
   this.ZV10cCorrespondenciaAssunto = "" ;
   this.OV10cCorrespondenciaAssunto = "" ;
   this.AV11cCorrespondenciaDataHora = gx.date.nullDate() ;
   this.ZV11cCorrespondenciaDataHora = gx.date.nullDate() ;
   this.OV11cCorrespondenciaDataHora = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2271CorrespondenciaEmpresaId = "" ;
   this.O2271CorrespondenciaEmpresaId = "" ;
   this.Z2273CorrespondenciaProtocolo = 0 ;
   this.O2273CorrespondenciaProtocolo = 0 ;
   this.Z2274CorrespondenciaRemetente = "" ;
   this.O2274CorrespondenciaRemetente = "" ;
   this.Z2275CorrespondenciaIdentificacao = "" ;
   this.O2275CorrespondenciaIdentificacao = "" ;
   this.Z2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.O2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.Z2247DepartamentoEmpresaId = "" ;
   this.O2247DepartamentoEmpresaId = "" ;
   this.Z2272CorrespondenciaAno = 0 ;
   this.O2272CorrespondenciaAno = 0 ;
   this.AV6cCorrespondenciaEmpresaId = "" ;
   this.AV7cCorrespondenciaProtocolo = 0 ;
   this.AV8cCorrespondenciaRemetente = "" ;
   this.AV9cCorrespondenciaIdentificacao = "" ;
   this.AV10cCorrespondenciaAssunto = "" ;
   this.AV11cCorrespondenciaDataHora = gx.date.nullDate() ;
   this.AV12pCorrespondenciaEmpresaId = "" ;
   this.AV13pCorrespondenciaAno = 0 ;
   this.AV14pCorrespondenciaProtocolo = 0 ;
   this.A2276CorrespondenciaAssunto = "" ;
   this.AV5LinkSelection = "" ;
   this.A2271CorrespondenciaEmpresaId = "" ;
   this.A2273CorrespondenciaProtocolo = 0 ;
   this.A2274CorrespondenciaRemetente = "" ;
   this.A2275CorrespondenciaIdentificacao = "" ;
   this.A2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2272CorrespondenciaAno = 0 ;
   this.Events = {"e131m62_client": ["ENTER", true] ,"e141m61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCorrespondenciaEmpresaId',fld:'vCCORRESPONDENCIAEMPRESAID'},{av:'AV7cCorrespondenciaProtocolo',fld:'vCCORRESPONDENCIAPROTOCOLO'},{av:'AV8cCorrespondenciaRemetente',fld:'vCCORRESPONDENCIAREMETENTE'},{av:'AV9cCorrespondenciaIdentificacao',fld:'vCCORRESPONDENCIAIDENTIFICACAO'},{av:'AV10cCorrespondenciaAssunto',fld:'vCCORRESPONDENCIAASSUNTO'},{av:'AV11cCorrespondenciaDataHora',fld:'vCCORRESPONDENCIADATAHORA'},{av:'AV13pCorrespondenciaAno',fld:'vPCORRESPONDENCIAANO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2271CorrespondenciaEmpresaId',fld:'CORRESPONDENCIAEMPRESAID'},{av:'A2273CorrespondenciaProtocolo',fld:'CORRESPONDENCIAPROTOCOLO'}],[{av:'AV12pCorrespondenciaEmpresaId',fld:'vPCORRESPONDENCIAEMPRESAID'},{av:'AV14pCorrespondenciaProtocolo',fld:'vPCORRESPONDENCIAPROTOCOLO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCorrespondenciaEmpresaId',fld:'vCCORRESPONDENCIAEMPRESAID'},{av:'AV7cCorrespondenciaProtocolo',fld:'vCCORRESPONDENCIAPROTOCOLO'},{av:'AV8cCorrespondenciaRemetente',fld:'vCCORRESPONDENCIAREMETENTE'},{av:'AV9cCorrespondenciaIdentificacao',fld:'vCCORRESPONDENCIAIDENTIFICACAO'},{av:'AV10cCorrespondenciaAssunto',fld:'vCCORRESPONDENCIAASSUNTO'},{av:'AV11cCorrespondenciaDataHora',fld:'vCCORRESPONDENCIADATAHORA'},{av:'AV13pCorrespondenciaAno',fld:'vPCORRESPONDENCIAANO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCorrespondenciaEmpresaId',fld:'vCCORRESPONDENCIAEMPRESAID'},{av:'AV7cCorrespondenciaProtocolo',fld:'vCCORRESPONDENCIAPROTOCOLO'},{av:'AV8cCorrespondenciaRemetente',fld:'vCCORRESPONDENCIAREMETENTE'},{av:'AV9cCorrespondenciaIdentificacao',fld:'vCCORRESPONDENCIAIDENTIFICACAO'},{av:'AV10cCorrespondenciaAssunto',fld:'vCCORRESPONDENCIAASSUNTO'},{av:'AV11cCorrespondenciaDataHora',fld:'vCCORRESPONDENCIADATAHORA'},{av:'AV13pCorrespondenciaAno',fld:'vPCORRESPONDENCIAANO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCorrespondenciaEmpresaId',fld:'vCCORRESPONDENCIAEMPRESAID'},{av:'AV7cCorrespondenciaProtocolo',fld:'vCCORRESPONDENCIAPROTOCOLO'},{av:'AV8cCorrespondenciaRemetente',fld:'vCCORRESPONDENCIAREMETENTE'},{av:'AV9cCorrespondenciaIdentificacao',fld:'vCCORRESPONDENCIAIDENTIFICACAO'},{av:'AV10cCorrespondenciaAssunto',fld:'vCCORRESPONDENCIAASSUNTO'},{av:'AV11cCorrespondenciaDataHora',fld:'vCCORRESPONDENCIADATAHORA'},{av:'AV13pCorrespondenciaAno',fld:'vPCORRESPONDENCIAANO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCorrespondenciaEmpresaId',fld:'vCCORRESPONDENCIAEMPRESAID'},{av:'AV7cCorrespondenciaProtocolo',fld:'vCCORRESPONDENCIAPROTOCOLO'},{av:'AV8cCorrespondenciaRemetente',fld:'vCCORRESPONDENCIAREMETENTE'},{av:'AV9cCorrespondenciaIdentificacao',fld:'vCCORRESPONDENCIAIDENTIFICACAO'},{av:'AV10cCorrespondenciaAssunto',fld:'vCCORRESPONDENCIAASSUNTO'},{av:'AV11cCorrespondenciaDataHora',fld:'vCCORRESPONDENCIADATAHORA'},{av:'AV13pCorrespondenciaAno',fld:'vPCORRESPONDENCIAANO',hsh:true}],[]];
   this.setVCMap("AV13pCorrespondenciaAno", "vPCORRESPONDENCIAANO", 0, "int");
   this.setVCMap("AV12pCorrespondenciaEmpresaId", "vPCORRESPONDENCIAEMPRESAID", 0, "char");
   this.setVCMap("AV14pCorrespondenciaProtocolo", "vPCORRESPONDENCIAPROTOCOLO", 0, "int");
   this.setVCMap("AV13pCorrespondenciaAno", "vPCORRESPONDENCIAANO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV13pCorrespondenciaAno"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx06n1_1_1());
