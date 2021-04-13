/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:4.40
*/
gx.evt.autoSkip = false;
gx.define('gx0ne0', false, function () {
   this.ServerClass =  "gx0ne0" ;
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
      this.AV13pPedidoCPCEmpresaId=gx.fn.getControlValue("vPPEDIDOCPCEMPRESAID") ;
      this.AV14pPedidoCPCNumero=gx.fn.getIntegerValue("vPPEDIDOCPCNUMERO",'.') ;
      this.AV15pPedidoCPCAno=gx.fn.getIntegerValue("vPPEDIDOCPCANO",'.') ;
      this.AV16pCorpoProvaSerie=gx.fn.getIntegerValue("vPCORPOPROVASERIE",'.') ;
   };
   this.e132ez2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142ez1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ne0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11450,53,"PEDIDOCPCEMPRESAID","Pedido CPCEmpresa Id","","PedidoCPCEmpresaId","char",0,"px",10,10,"left",null,[],11450,"PedidoCPCEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11340,54,"PEDIDOCPCNUMERO","Pedido CPCNumero","","PedidoCPCNumero","int",0,"px",10,10,"right",null,[],11340,"PedidoCPCNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11339,55,"PEDIDOCPCANO","Pedido CPCAno","","PedidoCPCAno","int",0,"px",5,5,"right",null,[],11339,"PedidoCPCAno",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11350,56,"CORPOPROVASERIE","Prova Serie","","CorpoProvaSerie","int",0,"px",8,8,"right",null,[],11350,"CorpoProvaSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11377,57,"CORPOPROVADESCPECA","Desc Peca","Selecionar","CorpoProvaDescPeca","svchar",0,"px",40,40,"left",null,[],11377,"CorpoProvaDescPeca",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11660,58,"CORPOPROVASLUMP","Prova Slump","","CorpoProvaSlump","svchar",0,"px",12,12,"left",null,[],11660,"CorpoProvaSlump",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPEDIDOCPCEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCEMPRESAID",gxz:"ZV6cPedidoCPCEmpresaId",gxold:"OV6cPedidoCPCEmpresaId",gxvar:"AV6cPedidoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPedidoCPCEmpresaId=Value},v2z:function(Value){gx.O.ZV6cPedidoCPCEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCEMPRESAID",gx.O.AV6cPedidoCPCEmpresaId,0)},c2v:function(){gx.O.AV6cPedidoCPCEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCPCEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPEDIDOCPCNUMERO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCNUMERO",gxz:"ZV7cPedidoCPCNumero",gxold:"OV7cPedidoCPCNumero",gxvar:"AV7cPedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPedidoCPCNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cPedidoCPCNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCNUMERO",gx.O.AV7cPedidoCPCNumero,0)},c2v:function(){gx.O.AV7cPedidoCPCNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCPCNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPEDIDOCPCANO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCPCANO",gxz:"ZV8cPedidoCPCAno",gxold:"OV8cPedidoCPCAno",gxvar:"AV8cPedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPedidoCPCAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cPedidoCPCAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCPCANO",gx.O.AV8cPedidoCPCAno,0)},c2v:function(){gx.O.AV8cPedidoCPCAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCPCANO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCORPOPROVASERIE", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORPOPROVASERIE",gxz:"ZV9cCorpoProvaSerie",gxold:"OV9cCorpoProvaSerie",gxvar:"AV9cCorpoProvaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCorpoProvaSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCorpoProvaSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCORPOPROVASERIE",gx.O.AV9cCorpoProvaSerie,0)},c2v:function(){gx.O.AV9cCorpoProvaSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCORPOPROVASERIE",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCORPOPROVADESCPECA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORPOPROVADESCPECA",gxz:"ZV10cCorpoProvaDescPeca",gxold:"OV10cCorpoProvaDescPeca",gxvar:"AV10cCorpoProvaDescPeca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCorpoProvaDescPeca=Value},v2z:function(Value){gx.O.ZV10cCorpoProvaDescPeca=Value},v2c:function(){gx.fn.setControlValue("vCCORPOPROVADESCPECA",gx.O.AV10cCorpoProvaDescPeca,0)},c2v:function(){gx.O.AV10cCorpoProvaDescPeca=this.val()},val:function(){return gx.fn.getControlValue("vCCORPOPROVADESCPECA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCORPOPROVACONDTEMPO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORPOPROVACONDTEMPO",gxz:"ZV11cCorpoProvaCondTempo",gxold:"OV11cCorpoProvaCondTempo",gxvar:"AV11cCorpoProvaCondTempo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCorpoProvaCondTempo=Value},v2z:function(Value){gx.O.ZV11cCorpoProvaCondTempo=Value},v2c:function(){gx.fn.setControlValue("vCCORPOPROVACONDTEMPO",gx.O.AV11cCorpoProvaCondTempo,0)},c2v:function(){gx.O.AV11cCorpoProvaCondTempo=this.val()},val:function(){return gx.fn.getControlValue("vCCORPOPROVACONDTEMPO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCORPOPROVACERTIFICADO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCORPOPROVACERTIFICADO",gxz:"ZV12cCorpoProvaCertificado",gxold:"OV12cCorpoProvaCertificado",gxvar:"AV12cCorpoProvaCertificado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cCorpoProvaCertificado=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cCorpoProvaCertificado=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCORPOPROVACERTIFICADO",gx.O.AV12cCorpoProvaCertificado,0)},c2v:function(){gx.O.AV12cCorpoProvaCertificado=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCORPOPROVACERTIFICADO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCEMPRESAID",gxz:"Z11450PedidoCPCEmpresaId",gxold:"O11450PedidoCPCEmpresaId",gxvar:"A11450PedidoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11450PedidoCPCEmpresaId=Value},v2z:function(Value){gx.O.Z11450PedidoCPCEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCPCEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A11450PedidoCPCEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11450PedidoCPCEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCPCEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCNUMERO",gxz:"Z11340PedidoCPCNumero",gxold:"O11340PedidoCPCNumero",gxvar:"A11340PedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11340PedidoCPCNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11340PedidoCPCNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCPCNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A11340PedidoCPCNumero,0)},c2v:function(){gx.O.A11340PedidoCPCNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCPCNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCPCANO",gxz:"Z11339PedidoCPCAno",gxold:"O11339PedidoCPCAno",gxvar:"A11339PedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11339PedidoCPCAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11339PedidoCPCAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCPCANO",row || gx.fn.currentGridRowImpl(51),gx.O.A11339PedidoCPCAno,0)},c2v:function(){gx.O.A11339PedidoCPCAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCPCANO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVASERIE",gxz:"Z11350CorpoProvaSerie",gxold:"O11350CorpoProvaSerie",gxvar:"A11350CorpoProvaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11350CorpoProvaSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11350CorpoProvaSerie=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CORPOPROVASERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A11350CorpoProvaSerie,0)},c2v:function(){gx.O.A11350CorpoProvaSerie=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CORPOPROVASERIE",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVADESCPECA",gxz:"Z11377CorpoProvaDescPeca",gxold:"O11377CorpoProvaDescPeca",gxvar:"A11377CorpoProvaDescPeca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11377CorpoProvaDescPeca=Value},v2z:function(Value){gx.O.Z11377CorpoProvaDescPeca=Value},v2c:function(row){gx.fn.setGridControlValue("CORPOPROVADESCPECA",row || gx.fn.currentGridRowImpl(51),gx.O.A11377CorpoProvaDescPeca,0)},c2v:function(){gx.O.A11377CorpoProvaDescPeca=this.val()},val:function(row){return gx.fn.getGridControlValue("CORPOPROVADESCPECA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:12,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVASLUMP",gxz:"Z11660CorpoProvaSlump",gxold:"O11660CorpoProvaSlump",gxvar:"A11660CorpoProvaSlump",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11660CorpoProvaSlump=Value},v2z:function(Value){gx.O.Z11660CorpoProvaSlump=Value},v2c:function(row){gx.fn.setGridControlValue("CORPOPROVASLUMP",row || gx.fn.currentGridRowImpl(51),gx.O.A11660CorpoProvaSlump,0)},c2v:function(){gx.O.A11660CorpoProvaSlump=this.val()},val:function(row){return gx.fn.getGridControlValue("CORPOPROVASLUMP",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cPedidoCPCEmpresaId = "" ;
   this.ZV6cPedidoCPCEmpresaId = "" ;
   this.OV6cPedidoCPCEmpresaId = "" ;
   this.AV7cPedidoCPCNumero = 0 ;
   this.ZV7cPedidoCPCNumero = 0 ;
   this.OV7cPedidoCPCNumero = 0 ;
   this.AV8cPedidoCPCAno = 0 ;
   this.ZV8cPedidoCPCAno = 0 ;
   this.OV8cPedidoCPCAno = 0 ;
   this.AV9cCorpoProvaSerie = 0 ;
   this.ZV9cCorpoProvaSerie = 0 ;
   this.OV9cCorpoProvaSerie = 0 ;
   this.AV10cCorpoProvaDescPeca = "" ;
   this.ZV10cCorpoProvaDescPeca = "" ;
   this.OV10cCorpoProvaDescPeca = "" ;
   this.AV11cCorpoProvaCondTempo = "" ;
   this.ZV11cCorpoProvaCondTempo = "" ;
   this.OV11cCorpoProvaCondTempo = "" ;
   this.AV12cCorpoProvaCertificado = 0 ;
   this.ZV12cCorpoProvaCertificado = 0 ;
   this.OV12cCorpoProvaCertificado = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11450PedidoCPCEmpresaId = "" ;
   this.O11450PedidoCPCEmpresaId = "" ;
   this.Z11340PedidoCPCNumero = 0 ;
   this.O11340PedidoCPCNumero = 0 ;
   this.Z11339PedidoCPCAno = 0 ;
   this.O11339PedidoCPCAno = 0 ;
   this.Z11350CorpoProvaSerie = 0 ;
   this.O11350CorpoProvaSerie = 0 ;
   this.Z11377CorpoProvaDescPeca = "" ;
   this.O11377CorpoProvaDescPeca = "" ;
   this.Z11660CorpoProvaSlump = "" ;
   this.O11660CorpoProvaSlump = "" ;
   this.AV6cPedidoCPCEmpresaId = "" ;
   this.AV7cPedidoCPCNumero = 0 ;
   this.AV8cPedidoCPCAno = 0 ;
   this.AV9cCorpoProvaSerie = 0 ;
   this.AV10cCorpoProvaDescPeca = "" ;
   this.AV11cCorpoProvaCondTempo = "" ;
   this.AV12cCorpoProvaCertificado = 0 ;
   this.AV13pPedidoCPCEmpresaId = "" ;
   this.AV14pPedidoCPCNumero = 0 ;
   this.AV15pPedidoCPCAno = 0 ;
   this.AV16pCorpoProvaSerie = 0 ;
   this.A11379CorpoProvaCertificado = 0 ;
   this.A11378CorpoProvaCondTempo = "" ;
   this.AV5LinkSelection = "" ;
   this.A11450PedidoCPCEmpresaId = "" ;
   this.A11340PedidoCPCNumero = 0 ;
   this.A11339PedidoCPCAno = 0 ;
   this.A11350CorpoProvaSerie = 0 ;
   this.A11377CorpoProvaDescPeca = "" ;
   this.A11660CorpoProvaSlump = "" ;
   this.Events = {"e132ez2_client": ["ENTER", true] ,"e142ez1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCPCEmpresaId',fld:'vCPEDIDOCPCEMPRESAID'},{av:'AV7cPedidoCPCNumero',fld:'vCPEDIDOCPCNUMERO'},{av:'AV8cPedidoCPCAno',fld:'vCPEDIDOCPCANO'},{av:'AV9cCorpoProvaSerie',fld:'vCCORPOPROVASERIE'},{av:'AV10cCorpoProvaDescPeca',fld:'vCCORPOPROVADESCPECA'},{av:'AV11cCorpoProvaCondTempo',fld:'vCCORPOPROVACONDTEMPO'},{av:'AV12cCorpoProvaCertificado',fld:'vCCORPOPROVACERTIFICADO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11450PedidoCPCEmpresaId',fld:'PEDIDOCPCEMPRESAID'},{av:'A11340PedidoCPCNumero',fld:'PEDIDOCPCNUMERO'},{av:'A11339PedidoCPCAno',fld:'PEDIDOCPCANO'},{av:'A11350CorpoProvaSerie',fld:'CORPOPROVASERIE'}],[{av:'AV13pPedidoCPCEmpresaId',fld:'vPPEDIDOCPCEMPRESAID'},{av:'AV14pPedidoCPCNumero',fld:'vPPEDIDOCPCNUMERO'},{av:'AV15pPedidoCPCAno',fld:'vPPEDIDOCPCANO'},{av:'AV16pCorpoProvaSerie',fld:'vPCORPOPROVASERIE'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCPCEmpresaId',fld:'vCPEDIDOCPCEMPRESAID'},{av:'AV7cPedidoCPCNumero',fld:'vCPEDIDOCPCNUMERO'},{av:'AV8cPedidoCPCAno',fld:'vCPEDIDOCPCANO'},{av:'AV9cCorpoProvaSerie',fld:'vCCORPOPROVASERIE'},{av:'AV10cCorpoProvaDescPeca',fld:'vCCORPOPROVADESCPECA'},{av:'AV11cCorpoProvaCondTempo',fld:'vCCORPOPROVACONDTEMPO'},{av:'AV12cCorpoProvaCertificado',fld:'vCCORPOPROVACERTIFICADO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCPCEmpresaId',fld:'vCPEDIDOCPCEMPRESAID'},{av:'AV7cPedidoCPCNumero',fld:'vCPEDIDOCPCNUMERO'},{av:'AV8cPedidoCPCAno',fld:'vCPEDIDOCPCANO'},{av:'AV9cCorpoProvaSerie',fld:'vCCORPOPROVASERIE'},{av:'AV10cCorpoProvaDescPeca',fld:'vCCORPOPROVADESCPECA'},{av:'AV11cCorpoProvaCondTempo',fld:'vCCORPOPROVACONDTEMPO'},{av:'AV12cCorpoProvaCertificado',fld:'vCCORPOPROVACERTIFICADO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCPCEmpresaId',fld:'vCPEDIDOCPCEMPRESAID'},{av:'AV7cPedidoCPCNumero',fld:'vCPEDIDOCPCNUMERO'},{av:'AV8cPedidoCPCAno',fld:'vCPEDIDOCPCANO'},{av:'AV9cCorpoProvaSerie',fld:'vCCORPOPROVASERIE'},{av:'AV10cCorpoProvaDescPeca',fld:'vCCORPOPROVADESCPECA'},{av:'AV11cCorpoProvaCondTempo',fld:'vCCORPOPROVACONDTEMPO'},{av:'AV12cCorpoProvaCertificado',fld:'vCCORPOPROVACERTIFICADO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCPCEmpresaId',fld:'vCPEDIDOCPCEMPRESAID'},{av:'AV7cPedidoCPCNumero',fld:'vCPEDIDOCPCNUMERO'},{av:'AV8cPedidoCPCAno',fld:'vCPEDIDOCPCANO'},{av:'AV9cCorpoProvaSerie',fld:'vCCORPOPROVASERIE'},{av:'AV10cCorpoProvaDescPeca',fld:'vCCORPOPROVADESCPECA'},{av:'AV11cCorpoProvaCondTempo',fld:'vCCORPOPROVACONDTEMPO'},{av:'AV12cCorpoProvaCertificado',fld:'vCCORPOPROVACERTIFICADO'}],[]];
   this.setVCMap("AV13pPedidoCPCEmpresaId", "vPPEDIDOCPCEMPRESAID", 0, "char");
   this.setVCMap("AV14pPedidoCPCNumero", "vPPEDIDOCPCNUMERO", 0, "int");
   this.setVCMap("AV15pPedidoCPCAno", "vPPEDIDOCPCANO", 0, "int");
   this.setVCMap("AV16pCorpoProvaSerie", "vPCORPOPROVASERIE", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ne0());
