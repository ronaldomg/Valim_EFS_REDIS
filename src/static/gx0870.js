/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:14.17
*/
gx.evt.autoSkip = false;
gx.define('gx0870', false, function () {
   this.ServerClass =  "gx0870" ;
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
      this.AV13pMontBarrasBoletoEmpresaId=gx.fn.getControlValue("vPMONTBARRASBOLETOEMPRESAID") ;
      this.AV14pMontBarrasBoletoId=gx.fn.getIntegerValue("vPMONTBARRASBOLETOID",'.') ;
      this.AV15pMontBoletoDetalheMontagem=gx.fn.getControlValue("vPMONTBOLETODETALHEMONTAGEM") ;
      this.AV16pMontBoletoDetalheOrdem=gx.fn.getIntegerValue("vPMONTBOLETODETALHEORDEM",'.') ;
   };
   this.e131nl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nl1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0870",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2819,53,"MONTBARRASBOLETOEMPRESAID","Código da Empresa","","MontBarrasBoletoEmpresaId","char",0,"px",10,10,"left",null,[],2819,"MontBarrasBoletoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2820,54,"MONTBARRASBOLETOID","Código da Montagem","","MontBarrasBoletoId","int",0,"px",4,4,"right",null,[],2820,"MontBarrasBoletoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2831,55,"MONTBOLETODETALHEMONTAGEM","Tipo da Montagem","","MontBoletoDetalheMontagem","char",0,"px",1,1,"left",null,[],2831,"MontBoletoDetalheMontagem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2832,56,"MONTBOLETODETALHEORDEM","Ordem do Detalhe","","MontBoletoDetalheOrdem","int",0,"px",4,4,"right",null,[],2832,"MontBoletoDetalheOrdem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2833,57,"MONTBOLETODETALHETIPOCAMPO","Tipo do Campo","Selecionar","MontBoletoDetalheTipoCampo","char",0,"px",1,1,"left",null,[],2833,"MontBoletoDetalheTipoCampo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2834,58,"MONTBOLETODETALHECAMPOFIXO","Campo Fixo","","MontBoletoDetalheCampoFixo","svchar",0,"px",20,20,"left",null,[],2834,"MontBoletoDetalheCampoFixo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2835,59,"MONTBOLETODETALHETABELA","Tabela","","MontBoletoDetalheTabela","svchar",0,"px",20,20,"left",null,[],2835,"MontBoletoDetalheTabela",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKMONTBARRASBOLETOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMONTBARRASBOLETOEMPRESAID",gxz:"ZV6cMontBarrasBoletoEmpresaId",gxold:"OV6cMontBarrasBoletoEmpresaId",gxvar:"AV6cMontBarrasBoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cMontBarrasBoletoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cMontBarrasBoletoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCMONTBARRASBOLETOEMPRESAID",gx.O.AV6cMontBarrasBoletoEmpresaId,0)},c2v:function(){gx.O.AV6cMontBarrasBoletoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCMONTBARRASBOLETOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKMONTBARRASBOLETOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMONTBARRASBOLETOID",gxz:"ZV7cMontBarrasBoletoId",gxold:"OV7cMontBarrasBoletoId",gxvar:"AV7cMontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cMontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cMontBarrasBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMONTBARRASBOLETOID",gx.O.AV7cMontBarrasBoletoId,0)},c2v:function(){gx.O.AV7cMontBarrasBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMONTBARRASBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMONTBOLETODETALHEMONTAGEM", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMONTBOLETODETALHEMONTAGEM",gxz:"ZV8cMontBoletoDetalheMontagem",gxold:"OV8cMontBoletoDetalheMontagem",gxvar:"AV8cMontBoletoDetalheMontagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cMontBoletoDetalheMontagem=Value},v2z:function(Value){gx.O.ZV8cMontBoletoDetalheMontagem=Value},v2c:function(){gx.fn.setControlValue("vCMONTBOLETODETALHEMONTAGEM",gx.O.AV8cMontBoletoDetalheMontagem,0)},c2v:function(){gx.O.AV8cMontBoletoDetalheMontagem=this.val()},val:function(){return gx.fn.getControlValue("vCMONTBOLETODETALHEMONTAGEM")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMONTBOLETODETALHEORDEM", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMONTBOLETODETALHEORDEM",gxz:"ZV9cMontBoletoDetalheOrdem",gxold:"OV9cMontBoletoDetalheOrdem",gxvar:"AV9cMontBoletoDetalheOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cMontBoletoDetalheOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cMontBoletoDetalheOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMONTBOLETODETALHEORDEM",gx.O.AV9cMontBoletoDetalheOrdem,0)},c2v:function(){gx.O.AV9cMontBoletoDetalheOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMONTBOLETODETALHEORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMONTBOLETODETALHETIPOCAMPO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMONTBOLETODETALHETIPOCAMPO",gxz:"ZV10cMontBoletoDetalheTipoCampo",gxold:"OV10cMontBoletoDetalheTipoCampo",gxvar:"AV10cMontBoletoDetalheTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cMontBoletoDetalheTipoCampo=Value},v2z:function(Value){gx.O.ZV10cMontBoletoDetalheTipoCampo=Value},v2c:function(){gx.fn.setControlValue("vCMONTBOLETODETALHETIPOCAMPO",gx.O.AV10cMontBoletoDetalheTipoCampo,0)},c2v:function(){gx.O.AV10cMontBoletoDetalheTipoCampo=this.val()},val:function(){return gx.fn.getControlValue("vCMONTBOLETODETALHETIPOCAMPO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMONTBOLETODETALHECAMPOFIXO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMONTBOLETODETALHECAMPOFIXO",gxz:"ZV11cMontBoletoDetalheCampoFixo",gxold:"OV11cMontBoletoDetalheCampoFixo",gxvar:"AV11cMontBoletoDetalheCampoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cMontBoletoDetalheCampoFixo=Value},v2z:function(Value){gx.O.ZV11cMontBoletoDetalheCampoFixo=Value},v2c:function(){gx.fn.setControlValue("vCMONTBOLETODETALHECAMPOFIXO",gx.O.AV11cMontBoletoDetalheCampoFixo,0)},c2v:function(){gx.O.AV11cMontBoletoDetalheCampoFixo=this.val()},val:function(){return gx.fn.getControlValue("vCMONTBOLETODETALHECAMPOFIXO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKMONTBOLETODETALHETABELA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMONTBOLETODETALHETABELA",gxz:"ZV12cMontBoletoDetalheTabela",gxold:"OV12cMontBoletoDetalheTabela",gxvar:"AV12cMontBoletoDetalheTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cMontBoletoDetalheTabela=Value},v2z:function(Value){gx.O.ZV12cMontBoletoDetalheTabela=Value},v2c:function(){gx.fn.setControlValue("vCMONTBOLETODETALHETABELA",gx.O.AV12cMontBoletoDetalheTabela,0)},c2v:function(){gx.O.AV12cMontBoletoDetalheTabela=this.val()},val:function(){return gx.fn.getControlValue("vCMONTBOLETODETALHETABELA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOEMPRESAID",gxz:"Z2819MontBarrasBoletoEmpresaId",gxold:"O2819MontBarrasBoletoEmpresaId",gxvar:"A2819MontBarrasBoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2819MontBarrasBoletoEmpresaId=Value},v2z:function(Value){gx.O.Z2819MontBarrasBoletoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2819MontBarrasBoletoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2819MontBarrasBoletoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBARRASBOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOID",gxz:"Z2820MontBarrasBoletoId",gxold:"O2820MontBarrasBoletoId",gxvar:"A2820MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2820MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2820MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2820MontBarrasBoletoId,0)},c2v:function(){gx.O.A2820MontBarrasBoletoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEMONTAGEM",gxz:"Z2831MontBoletoDetalheMontagem",gxold:"O2831MontBoletoDetalheMontagem",gxvar:"A2831MontBoletoDetalheMontagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2831MontBoletoDetalheMontagem=Value},v2z:function(Value){gx.O.Z2831MontBoletoDetalheMontagem=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHEMONTAGEM",row || gx.fn.currentGridRowImpl(51),gx.O.A2831MontBoletoDetalheMontagem,0)},c2v:function(){gx.O.A2831MontBoletoDetalheMontagem=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHEMONTAGEM",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEORDEM",gxz:"Z2832MontBoletoDetalheOrdem",gxold:"O2832MontBoletoDetalheOrdem",gxvar:"A2832MontBoletoDetalheOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2832MontBoletoDetalheOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2832MontBoletoDetalheOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHEORDEM",row || gx.fn.currentGridRowImpl(51),gx.O.A2832MontBoletoDetalheOrdem,0)},c2v:function(){gx.O.A2832MontBoletoDetalheOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBOLETODETALHEORDEM",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHETIPOCAMPO",gxz:"Z2833MontBoletoDetalheTipoCampo",gxold:"O2833MontBoletoDetalheTipoCampo",gxvar:"A2833MontBoletoDetalheTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2833MontBoletoDetalheTipoCampo=Value},v2z:function(Value){gx.O.Z2833MontBoletoDetalheTipoCampo=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHETIPOCAMPO",row || gx.fn.currentGridRowImpl(51),gx.O.A2833MontBoletoDetalheTipoCampo,0)},c2v:function(){gx.O.A2833MontBoletoDetalheTipoCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHETIPOCAMPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOFIXO",gxz:"Z2834MontBoletoDetalheCampoFixo",gxold:"O2834MontBoletoDetalheCampoFixo",gxvar:"A2834MontBoletoDetalheCampoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2834MontBoletoDetalheCampoFixo=Value},v2z:function(Value){gx.O.Z2834MontBoletoDetalheCampoFixo=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHECAMPOFIXO",row || gx.fn.currentGridRowImpl(51),gx.O.A2834MontBoletoDetalheCampoFixo,0)},c2v:function(){gx.O.A2834MontBoletoDetalheCampoFixo=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHECAMPOFIXO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHETABELA",gxz:"Z2835MontBoletoDetalheTabela",gxold:"O2835MontBoletoDetalheTabela",gxvar:"A2835MontBoletoDetalheTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2835MontBoletoDetalheTabela=Value},v2z:function(Value){gx.O.Z2835MontBoletoDetalheTabela=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHETABELA",row || gx.fn.currentGridRowImpl(51),gx.O.A2835MontBoletoDetalheTabela,0)},c2v:function(){gx.O.A2835MontBoletoDetalheTabela=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHETABELA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cMontBarrasBoletoEmpresaId = "" ;
   this.ZV6cMontBarrasBoletoEmpresaId = "" ;
   this.OV6cMontBarrasBoletoEmpresaId = "" ;
   this.AV7cMontBarrasBoletoId = 0 ;
   this.ZV7cMontBarrasBoletoId = 0 ;
   this.OV7cMontBarrasBoletoId = 0 ;
   this.AV8cMontBoletoDetalheMontagem = "" ;
   this.ZV8cMontBoletoDetalheMontagem = "" ;
   this.OV8cMontBoletoDetalheMontagem = "" ;
   this.AV9cMontBoletoDetalheOrdem = 0 ;
   this.ZV9cMontBoletoDetalheOrdem = 0 ;
   this.OV9cMontBoletoDetalheOrdem = 0 ;
   this.AV10cMontBoletoDetalheTipoCampo = "" ;
   this.ZV10cMontBoletoDetalheTipoCampo = "" ;
   this.OV10cMontBoletoDetalheTipoCampo = "" ;
   this.AV11cMontBoletoDetalheCampoFixo = "" ;
   this.ZV11cMontBoletoDetalheCampoFixo = "" ;
   this.OV11cMontBoletoDetalheCampoFixo = "" ;
   this.AV12cMontBoletoDetalheTabela = "" ;
   this.ZV12cMontBoletoDetalheTabela = "" ;
   this.OV12cMontBoletoDetalheTabela = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2819MontBarrasBoletoEmpresaId = "" ;
   this.O2819MontBarrasBoletoEmpresaId = "" ;
   this.Z2820MontBarrasBoletoId = 0 ;
   this.O2820MontBarrasBoletoId = 0 ;
   this.Z2831MontBoletoDetalheMontagem = "" ;
   this.O2831MontBoletoDetalheMontagem = "" ;
   this.Z2832MontBoletoDetalheOrdem = 0 ;
   this.O2832MontBoletoDetalheOrdem = 0 ;
   this.Z2833MontBoletoDetalheTipoCampo = "" ;
   this.O2833MontBoletoDetalheTipoCampo = "" ;
   this.Z2834MontBoletoDetalheCampoFixo = "" ;
   this.O2834MontBoletoDetalheCampoFixo = "" ;
   this.Z2835MontBoletoDetalheTabela = "" ;
   this.O2835MontBoletoDetalheTabela = "" ;
   this.AV6cMontBarrasBoletoEmpresaId = "" ;
   this.AV7cMontBarrasBoletoId = 0 ;
   this.AV8cMontBoletoDetalheMontagem = "" ;
   this.AV9cMontBoletoDetalheOrdem = 0 ;
   this.AV10cMontBoletoDetalheTipoCampo = "" ;
   this.AV11cMontBoletoDetalheCampoFixo = "" ;
   this.AV12cMontBoletoDetalheTabela = "" ;
   this.AV13pMontBarrasBoletoEmpresaId = "" ;
   this.AV14pMontBarrasBoletoId = 0 ;
   this.AV15pMontBoletoDetalheMontagem = "" ;
   this.AV16pMontBoletoDetalheOrdem = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.A2831MontBoletoDetalheMontagem = "" ;
   this.A2832MontBoletoDetalheOrdem = 0 ;
   this.A2833MontBoletoDetalheTipoCampo = "" ;
   this.A2834MontBoletoDetalheCampoFixo = "" ;
   this.A2835MontBoletoDetalheTabela = "" ;
   this.Events = {"e131nl2_client": ["ENTER", true] ,"e141nl1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMontBarrasBoletoEmpresaId',fld:'vCMONTBARRASBOLETOEMPRESAID'},{av:'AV7cMontBarrasBoletoId',fld:'vCMONTBARRASBOLETOID'},{av:'AV8cMontBoletoDetalheMontagem',fld:'vCMONTBOLETODETALHEMONTAGEM'},{av:'AV9cMontBoletoDetalheOrdem',fld:'vCMONTBOLETODETALHEORDEM'},{av:'AV10cMontBoletoDetalheTipoCampo',fld:'vCMONTBOLETODETALHETIPOCAMPO'},{av:'AV11cMontBoletoDetalheCampoFixo',fld:'vCMONTBOLETODETALHECAMPOFIXO'},{av:'AV12cMontBoletoDetalheTabela',fld:'vCMONTBOLETODETALHETABELA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2819MontBarrasBoletoEmpresaId',fld:'MONTBARRASBOLETOEMPRESAID'},{av:'A2820MontBarrasBoletoId',fld:'MONTBARRASBOLETOID'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'}],[{av:'AV13pMontBarrasBoletoEmpresaId',fld:'vPMONTBARRASBOLETOEMPRESAID'},{av:'AV14pMontBarrasBoletoId',fld:'vPMONTBARRASBOLETOID'},{av:'AV15pMontBoletoDetalheMontagem',fld:'vPMONTBOLETODETALHEMONTAGEM'},{av:'AV16pMontBoletoDetalheOrdem',fld:'vPMONTBOLETODETALHEORDEM'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMontBarrasBoletoEmpresaId',fld:'vCMONTBARRASBOLETOEMPRESAID'},{av:'AV7cMontBarrasBoletoId',fld:'vCMONTBARRASBOLETOID'},{av:'AV8cMontBoletoDetalheMontagem',fld:'vCMONTBOLETODETALHEMONTAGEM'},{av:'AV9cMontBoletoDetalheOrdem',fld:'vCMONTBOLETODETALHEORDEM'},{av:'AV10cMontBoletoDetalheTipoCampo',fld:'vCMONTBOLETODETALHETIPOCAMPO'},{av:'AV11cMontBoletoDetalheCampoFixo',fld:'vCMONTBOLETODETALHECAMPOFIXO'},{av:'AV12cMontBoletoDetalheTabela',fld:'vCMONTBOLETODETALHETABELA'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMontBarrasBoletoEmpresaId',fld:'vCMONTBARRASBOLETOEMPRESAID'},{av:'AV7cMontBarrasBoletoId',fld:'vCMONTBARRASBOLETOID'},{av:'AV8cMontBoletoDetalheMontagem',fld:'vCMONTBOLETODETALHEMONTAGEM'},{av:'AV9cMontBoletoDetalheOrdem',fld:'vCMONTBOLETODETALHEORDEM'},{av:'AV10cMontBoletoDetalheTipoCampo',fld:'vCMONTBOLETODETALHETIPOCAMPO'},{av:'AV11cMontBoletoDetalheCampoFixo',fld:'vCMONTBOLETODETALHECAMPOFIXO'},{av:'AV12cMontBoletoDetalheTabela',fld:'vCMONTBOLETODETALHETABELA'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMontBarrasBoletoEmpresaId',fld:'vCMONTBARRASBOLETOEMPRESAID'},{av:'AV7cMontBarrasBoletoId',fld:'vCMONTBARRASBOLETOID'},{av:'AV8cMontBoletoDetalheMontagem',fld:'vCMONTBOLETODETALHEMONTAGEM'},{av:'AV9cMontBoletoDetalheOrdem',fld:'vCMONTBOLETODETALHEORDEM'},{av:'AV10cMontBoletoDetalheTipoCampo',fld:'vCMONTBOLETODETALHETIPOCAMPO'},{av:'AV11cMontBoletoDetalheCampoFixo',fld:'vCMONTBOLETODETALHECAMPOFIXO'},{av:'AV12cMontBoletoDetalheTabela',fld:'vCMONTBOLETODETALHETABELA'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMontBarrasBoletoEmpresaId',fld:'vCMONTBARRASBOLETOEMPRESAID'},{av:'AV7cMontBarrasBoletoId',fld:'vCMONTBARRASBOLETOID'},{av:'AV8cMontBoletoDetalheMontagem',fld:'vCMONTBOLETODETALHEMONTAGEM'},{av:'AV9cMontBoletoDetalheOrdem',fld:'vCMONTBOLETODETALHEORDEM'},{av:'AV10cMontBoletoDetalheTipoCampo',fld:'vCMONTBOLETODETALHETIPOCAMPO'},{av:'AV11cMontBoletoDetalheCampoFixo',fld:'vCMONTBOLETODETALHECAMPOFIXO'},{av:'AV12cMontBoletoDetalheTabela',fld:'vCMONTBOLETODETALHETABELA'}],[]];
   this.setVCMap("AV13pMontBarrasBoletoEmpresaId", "vPMONTBARRASBOLETOEMPRESAID", 0, "char");
   this.setVCMap("AV14pMontBarrasBoletoId", "vPMONTBARRASBOLETOID", 0, "int");
   this.setVCMap("AV15pMontBoletoDetalheMontagem", "vPMONTBOLETODETALHEMONTAGEM", 0, "char");
   this.setVCMap("AV16pMontBoletoDetalheOrdem", "vPMONTBOLETODETALHEORDEM", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0870());