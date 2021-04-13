/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:37:46.22
*/
gx.evt.autoSkip = false;
gx.define('gx0d20', false, function () {
   this.ServerClass =  "gx0d20" ;
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
      this.AV13pRemessaRetornoCPagEmpresaId=gx.fn.getControlValue("vPREMESSARETORNOCPAGEMPRESAID") ;
      this.AV14pRemessaRetornoCPagId=gx.fn.getIntegerValue("vPREMESSARETORNOCPAGID",'.') ;
   };
   this.e131s02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141s01_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,64];
   this.GXLastCtrlId =64;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0d20",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5462,53,"REMESSARETORNOCPAGEMPRESAID","Empresa","","RemessaRetornoCPagEmpresaId","char",0,"px",10,10,"left",null,[],5462,"RemessaRetornoCPagEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5463,54,"REMESSARETORNOCPAGID","Código","","RemessaRetornoCPagId","int",0,"px",4,4,"right",null,[],5463,"RemessaRetornoCPagId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5447,55,"REMESSARETORNOCPAGDESCRICAO","Descrição","Selecionar","RemessaRetornoCPagDescricao","svchar",0,"px",40,40,"left",null,[],5447,"RemessaRetornoCPagDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5448,56,"REMESSARETORNOCPAGTAMANHO","Tamanho","","RemessaRetornoCPagTamanho","int",0,"px",4,4,"right",null,[],5448,"RemessaRetornoCPagTamanho",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5449,57,"REMRETCPAGARBANCOEMPID","Empresa Banco","","RemRetCPagarBancoEmpId","char",0,"px",10,10,"left",null,[],5449,"RemRetCPagarBancoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5450,58,"REMRETCPAGARBANCOID","Código Banco","","RemRetCPagarBancoId","int",0,"px",3,3,"right",null,[],5450,"RemRetCPagarBancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5453,59,"REMESSARETORNOCPAGEXTREM","Extensão Remessa","","RemessaRetornoCPagExtRem","char",0,"px",5,5,"left",null,[],5453,"RemessaRetornoCPagExtRem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5454,60,"REMESSARETORNOCPAGPREREM","Prefixo Remessa","","RemessaRetornoCPagPreRem","svchar",0,"px",10,10,"left",null,[],5454,"RemessaRetornoCPagPreRem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5458,61,"REMESSARETORNOCPAGTIPO","Tipo","","RemessaRetornoCPagTipo","char",0,"px",1,1,"left",null,[],5458,"RemessaRetornoCPagTipo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKREMESSARETORNOCPAGEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOCPAGEMPRESAID",gxz:"ZV6cRemessaRetornoCPagEmpresaId",gxold:"OV6cRemessaRetornoCPagEmpresaId",gxvar:"AV6cRemessaRetornoCPagEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cRemessaRetornoCPagEmpresaId=Value},v2z:function(Value){gx.O.ZV6cRemessaRetornoCPagEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOCPAGEMPRESAID",gx.O.AV6cRemessaRetornoCPagEmpresaId,0)},c2v:function(){gx.O.AV6cRemessaRetornoCPagEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOCPAGEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKREMESSARETORNOCPAGID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOCPAGID",gxz:"ZV7cRemessaRetornoCPagId",gxold:"OV7cRemessaRetornoCPagId",gxvar:"AV7cRemessaRetornoCPagId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cRemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOCPAGID",gx.O.AV7cRemessaRetornoCPagId,0)},c2v:function(){gx.O.AV7cRemessaRetornoCPagId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOCPAGID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKREMESSARETORNOCPAGDESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOCPAGDESCRICAO",gxz:"ZV8cRemessaRetornoCPagDescricao",gxold:"OV8cRemessaRetornoCPagDescricao",gxvar:"AV8cRemessaRetornoCPagDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cRemessaRetornoCPagDescricao=Value},v2z:function(Value){gx.O.ZV8cRemessaRetornoCPagDescricao=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOCPAGDESCRICAO",gx.O.AV8cRemessaRetornoCPagDescricao,0)},c2v:function(){gx.O.AV8cRemessaRetornoCPagDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOCPAGDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKREMESSARETORNOCPAGTAMANHO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOCPAGTAMANHO",gxz:"ZV9cRemessaRetornoCPagTamanho",gxold:"OV9cRemessaRetornoCPagTamanho",gxvar:"AV9cRemessaRetornoCPagTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cRemessaRetornoCPagTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cRemessaRetornoCPagTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOCPAGTAMANHO",gx.O.AV9cRemessaRetornoCPagTamanho,0)},c2v:function(){gx.O.AV9cRemessaRetornoCPagTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOCPAGTAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKREMRETCPAGARBANCOEMPID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMRETCPAGARBANCOEMPID",gxz:"ZV10cRemRetCPagarBancoEmpId",gxold:"OV10cRemRetCPagarBancoEmpId",gxvar:"AV10cRemRetCPagarBancoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cRemRetCPagarBancoEmpId=Value},v2z:function(Value){gx.O.ZV10cRemRetCPagarBancoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCREMRETCPAGARBANCOEMPID",gx.O.AV10cRemRetCPagarBancoEmpId,0)},c2v:function(){gx.O.AV10cRemRetCPagarBancoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCREMRETCPAGARBANCOEMPID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKREMRETCPAGARBANCOID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMRETCPAGARBANCOID",gxz:"ZV11cRemRetCPagarBancoId",gxold:"OV11cRemRetCPagarBancoId",gxvar:"AV11cRemRetCPagarBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cRemRetCPagarBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cRemRetCPagarBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMRETCPAGARBANCOID",gx.O.AV11cRemRetCPagarBancoId,0)},c2v:function(){gx.O.AV11cRemRetCPagarBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMRETCPAGARBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKREMESSARETORNOCPAGEXTREM", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOCPAGEXTREM",gxz:"ZV12cRemessaRetornoCPagExtRem",gxold:"OV12cRemessaRetornoCPagExtRem",gxvar:"AV12cRemessaRetornoCPagExtRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cRemessaRetornoCPagExtRem=Value},v2z:function(Value){gx.O.ZV12cRemessaRetornoCPagExtRem=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOCPAGEXTREM",gx.O.AV12cRemessaRetornoCPagExtRem,0)},c2v:function(){gx.O.AV12cRemessaRetornoCPagExtRem=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOCPAGEXTREM")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGEMPRESAID",gxz:"Z5462RemessaRetornoCPagEmpresaId",gxold:"O5462RemessaRetornoCPagEmpresaId",gxvar:"A5462RemessaRetornoCPagEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5462RemessaRetornoCPagEmpresaId=Value},v2z:function(Value){gx.O.Z5462RemessaRetornoCPagEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A5462RemessaRetornoCPagEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5462RemessaRetornoCPagEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGID",gxz:"Z5463RemessaRetornoCPagId",gxold:"O5463RemessaRetornoCPagId",gxvar:"A5463RemessaRetornoCPagId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5463RemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGID",row || gx.fn.currentGridRowImpl(51),gx.O.A5463RemessaRetornoCPagId,0)},c2v:function(){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOCPAGID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGDESCRICAO",gxz:"Z5447RemessaRetornoCPagDescricao",gxold:"O5447RemessaRetornoCPagDescricao",gxvar:"A5447RemessaRetornoCPagDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5447RemessaRetornoCPagDescricao=Value},v2z:function(Value){gx.O.Z5447RemessaRetornoCPagDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGDESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A5447RemessaRetornoCPagDescricao,0)},c2v:function(){gx.O.A5447RemessaRetornoCPagDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGDESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTAMANHO",gxz:"Z5448RemessaRetornoCPagTamanho",gxold:"O5448RemessaRetornoCPagTamanho",gxvar:"A5448RemessaRetornoCPagTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGTAMANHO",row || gx.fn.currentGridRowImpl(51),gx.O.A5448RemessaRetornoCPagTamanho,0)},c2v:function(){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOCPAGTAMANHO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMRETCPAGARBANCOEMPID",gxz:"Z5449RemRetCPagarBancoEmpId",gxold:"O5449RemRetCPagarBancoEmpId",gxvar:"A5449RemRetCPagarBancoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5449RemRetCPagarBancoEmpId=Value},v2z:function(Value){gx.O.Z5449RemRetCPagarBancoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("REMRETCPAGARBANCOEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A5449RemRetCPagarBancoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5449RemRetCPagarBancoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("REMRETCPAGARBANCOEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMRETCPAGARBANCOID",gxz:"Z5450RemRetCPagarBancoId",gxold:"O5450RemRetCPagarBancoId",gxvar:"A5450RemRetCPagarBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5450RemRetCPagarBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5450RemRetCPagarBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMRETCPAGARBANCOID",row || gx.fn.currentGridRowImpl(51),gx.O.A5450RemRetCPagarBancoId,0)},c2v:function(){gx.O.A5450RemRetCPagarBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMRETCPAGARBANCOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGEXTREM",gxz:"Z5453RemessaRetornoCPagExtRem",gxold:"O5453RemessaRetornoCPagExtRem",gxvar:"A5453RemessaRetornoCPagExtRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5453RemessaRetornoCPagExtRem=Value},v2z:function(Value){gx.O.Z5453RemessaRetornoCPagExtRem=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGEXTREM",row || gx.fn.currentGridRowImpl(51),gx.O.A5453RemessaRetornoCPagExtRem,0)},c2v:function(){gx.O.A5453RemessaRetornoCPagExtRem=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGEXTREM",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGPREREM",gxz:"Z5454RemessaRetornoCPagPreRem",gxold:"O5454RemessaRetornoCPagPreRem",gxvar:"A5454RemessaRetornoCPagPreRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5454RemessaRetornoCPagPreRem=Value},v2z:function(Value){gx.O.Z5454RemessaRetornoCPagPreRem=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGPREREM",row || gx.fn.currentGridRowImpl(51),gx.O.A5454RemessaRetornoCPagPreRem,0)},c2v:function(){gx.O.A5454RemessaRetornoCPagPreRem=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGPREREM",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTIPO",gxz:"Z5458RemessaRetornoCPagTipo",gxold:"O5458RemessaRetornoCPagTipo",gxvar:"A5458RemessaRetornoCPagTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5458RemessaRetornoCPagTipo=Value},v2z:function(Value){gx.O.Z5458RemessaRetornoCPagTipo=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A5458RemessaRetornoCPagTipo,0)},c2v:function(){gx.O.A5458RemessaRetornoCPagTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   this.AV6cRemessaRetornoCPagEmpresaId = "" ;
   this.ZV6cRemessaRetornoCPagEmpresaId = "" ;
   this.OV6cRemessaRetornoCPagEmpresaId = "" ;
   this.AV7cRemessaRetornoCPagId = 0 ;
   this.ZV7cRemessaRetornoCPagId = 0 ;
   this.OV7cRemessaRetornoCPagId = 0 ;
   this.AV8cRemessaRetornoCPagDescricao = "" ;
   this.ZV8cRemessaRetornoCPagDescricao = "" ;
   this.OV8cRemessaRetornoCPagDescricao = "" ;
   this.AV9cRemessaRetornoCPagTamanho = 0 ;
   this.ZV9cRemessaRetornoCPagTamanho = 0 ;
   this.OV9cRemessaRetornoCPagTamanho = 0 ;
   this.AV10cRemRetCPagarBancoEmpId = "" ;
   this.ZV10cRemRetCPagarBancoEmpId = "" ;
   this.OV10cRemRetCPagarBancoEmpId = "" ;
   this.AV11cRemRetCPagarBancoId = 0 ;
   this.ZV11cRemRetCPagarBancoId = 0 ;
   this.OV11cRemRetCPagarBancoId = 0 ;
   this.AV12cRemessaRetornoCPagExtRem = "" ;
   this.ZV12cRemessaRetornoCPagExtRem = "" ;
   this.OV12cRemessaRetornoCPagExtRem = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5462RemessaRetornoCPagEmpresaId = "" ;
   this.O5462RemessaRetornoCPagEmpresaId = "" ;
   this.Z5463RemessaRetornoCPagId = 0 ;
   this.O5463RemessaRetornoCPagId = 0 ;
   this.Z5447RemessaRetornoCPagDescricao = "" ;
   this.O5447RemessaRetornoCPagDescricao = "" ;
   this.Z5448RemessaRetornoCPagTamanho = 0 ;
   this.O5448RemessaRetornoCPagTamanho = 0 ;
   this.Z5449RemRetCPagarBancoEmpId = "" ;
   this.O5449RemRetCPagarBancoEmpId = "" ;
   this.Z5450RemRetCPagarBancoId = 0 ;
   this.O5450RemRetCPagarBancoId = 0 ;
   this.Z5453RemessaRetornoCPagExtRem = "" ;
   this.O5453RemessaRetornoCPagExtRem = "" ;
   this.Z5454RemessaRetornoCPagPreRem = "" ;
   this.O5454RemessaRetornoCPagPreRem = "" ;
   this.Z5458RemessaRetornoCPagTipo = "" ;
   this.O5458RemessaRetornoCPagTipo = "" ;
   this.AV6cRemessaRetornoCPagEmpresaId = "" ;
   this.AV7cRemessaRetornoCPagId = 0 ;
   this.AV8cRemessaRetornoCPagDescricao = "" ;
   this.AV9cRemessaRetornoCPagTamanho = 0 ;
   this.AV10cRemRetCPagarBancoEmpId = "" ;
   this.AV11cRemRetCPagarBancoId = 0 ;
   this.AV12cRemessaRetornoCPagExtRem = "" ;
   this.AV13pRemessaRetornoCPagEmpresaId = "" ;
   this.AV14pRemessaRetornoCPagId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A5462RemessaRetornoCPagEmpresaId = "" ;
   this.A5463RemessaRetornoCPagId = 0 ;
   this.A5447RemessaRetornoCPagDescricao = "" ;
   this.A5448RemessaRetornoCPagTamanho = 0 ;
   this.A5449RemRetCPagarBancoEmpId = "" ;
   this.A5450RemRetCPagarBancoId = 0 ;
   this.A5453RemessaRetornoCPagExtRem = "" ;
   this.A5454RemessaRetornoCPagPreRem = "" ;
   this.A5458RemessaRetornoCPagTipo = "" ;
   this.Events = {"e131s02_client": ["ENTER", true] ,"e141s01_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoCPagEmpresaId',fld:'vCREMESSARETORNOCPAGEMPRESAID'},{av:'AV7cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV8cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV9cRemessaRetornoCPagTamanho',fld:'vCREMESSARETORNOCPAGTAMANHO'},{av:'AV10cRemRetCPagarBancoEmpId',fld:'vCREMRETCPAGARBANCOEMPID'},{av:'AV11cRemRetCPagarBancoId',fld:'vCREMRETCPAGARBANCOID'},{av:'AV12cRemessaRetornoCPagExtRem',fld:'vCREMESSARETORNOCPAGEXTREM'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5462RemessaRetornoCPagEmpresaId',fld:'REMESSARETORNOCPAGEMPRESAID'},{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'}],[{av:'AV13pRemessaRetornoCPagEmpresaId',fld:'vPREMESSARETORNOCPAGEMPRESAID'},{av:'AV14pRemessaRetornoCPagId',fld:'vPREMESSARETORNOCPAGID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoCPagEmpresaId',fld:'vCREMESSARETORNOCPAGEMPRESAID'},{av:'AV7cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV8cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV9cRemessaRetornoCPagTamanho',fld:'vCREMESSARETORNOCPAGTAMANHO'},{av:'AV10cRemRetCPagarBancoEmpId',fld:'vCREMRETCPAGARBANCOEMPID'},{av:'AV11cRemRetCPagarBancoId',fld:'vCREMRETCPAGARBANCOID'},{av:'AV12cRemessaRetornoCPagExtRem',fld:'vCREMESSARETORNOCPAGEXTREM'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoCPagEmpresaId',fld:'vCREMESSARETORNOCPAGEMPRESAID'},{av:'AV7cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV8cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV9cRemessaRetornoCPagTamanho',fld:'vCREMESSARETORNOCPAGTAMANHO'},{av:'AV10cRemRetCPagarBancoEmpId',fld:'vCREMRETCPAGARBANCOEMPID'},{av:'AV11cRemRetCPagarBancoId',fld:'vCREMRETCPAGARBANCOID'},{av:'AV12cRemessaRetornoCPagExtRem',fld:'vCREMESSARETORNOCPAGEXTREM'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoCPagEmpresaId',fld:'vCREMESSARETORNOCPAGEMPRESAID'},{av:'AV7cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV8cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV9cRemessaRetornoCPagTamanho',fld:'vCREMESSARETORNOCPAGTAMANHO'},{av:'AV10cRemRetCPagarBancoEmpId',fld:'vCREMRETCPAGARBANCOEMPID'},{av:'AV11cRemRetCPagarBancoId',fld:'vCREMRETCPAGARBANCOID'},{av:'AV12cRemessaRetornoCPagExtRem',fld:'vCREMESSARETORNOCPAGEXTREM'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoCPagEmpresaId',fld:'vCREMESSARETORNOCPAGEMPRESAID'},{av:'AV7cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV8cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV9cRemessaRetornoCPagTamanho',fld:'vCREMESSARETORNOCPAGTAMANHO'},{av:'AV10cRemRetCPagarBancoEmpId',fld:'vCREMRETCPAGARBANCOEMPID'},{av:'AV11cRemRetCPagarBancoId',fld:'vCREMRETCPAGARBANCOID'},{av:'AV12cRemessaRetornoCPagExtRem',fld:'vCREMESSARETORNOCPAGEXTREM'}],[]];
   this.setVCMap("AV13pRemessaRetornoCPagEmpresaId", "vPREMESSARETORNOCPAGEMPRESAID", 0, "char");
   this.setVCMap("AV14pRemessaRetornoCPagId", "vPREMESSARETORNOCPAGID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0d20());
