/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:3.89
*/
gx.evt.autoSkip = false;
gx.define('gx0830', false, function () {
   this.ServerClass =  "gx0830" ;
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
      this.AV13pRemessaRetornoEmpresaId=gx.fn.getControlValue("vPREMESSARETORNOEMPRESAID") ;
      this.AV14pRemessaRetornoId=gx.fn.getIntegerValue("vPREMESSARETORNOID",'.') ;
   };
   this.e131nh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nh1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0830",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2784,53,"REMESSARETORNOEMPRESAID","Empresa","","RemessaRetornoEmpresaId","char",0,"px",10,10,"left",null,[],2784,"RemessaRetornoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2785,54,"REMESSARETORNOID","Código","","RemessaRetornoId","int",0,"px",4,4,"right",null,[],2785,"RemessaRetornoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2786,55,"REMESSARETORNODESCRICAO","Descrição","Selecionar","RemessaRetornoDescricao","svchar",0,"px",40,40,"left",null,[],2786,"RemessaRetornoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2787,56,"REMESSARETORNOTAMANHO","Tamanho","","RemessaRetornoTamanho","int",0,"px",4,4,"right",null,[],2787,"RemessaRetornoTamanho",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2783,57,"REMESSARETORNOBANCOEMPID","Empresa do Banco","","RemessaRetornoBancoEmpId","char",0,"px",10,10,"left",null,[],2783,"RemessaRetornoBancoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2781,58,"REMESSARETORNOBANCOID","Código do Banco","","RemessaRetornoBancoId","int",0,"px",3,3,"right",null,[],2781,"RemessaRetornoBancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2789,59,"REMESSARETORNOEXTENSAOREM","Extensão da Remessa","","RemessaRetornoExtensaoRem","svchar",0,"px",5,5,"left",null,[],2789,"RemessaRetornoExtensaoRem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2792,60,"REMESSARETORNOTIPO","Tipo","","RemessaRetornoTipo","char",0,"px",1,1,"left",null,[],2792,"RemessaRetornoTipo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKREMESSARETORNOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOEMPRESAID",gxz:"ZV6cRemessaRetornoEmpresaId",gxold:"OV6cRemessaRetornoEmpresaId",gxvar:"AV6cRemessaRetornoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cRemessaRetornoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cRemessaRetornoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOEMPRESAID",gx.O.AV6cRemessaRetornoEmpresaId,0)},c2v:function(){gx.O.AV6cRemessaRetornoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKREMESSARETORNOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOID",gxz:"ZV7cRemessaRetornoId",gxold:"OV7cRemessaRetornoId",gxvar:"AV7cRemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cRemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOID",gx.O.AV7cRemessaRetornoId,0)},c2v:function(){gx.O.AV7cRemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKREMESSARETORNODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNODESCRICAO",gxz:"ZV8cRemessaRetornoDescricao",gxold:"OV8cRemessaRetornoDescricao",gxvar:"AV8cRemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cRemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV8cRemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNODESCRICAO",gx.O.AV8cRemessaRetornoDescricao,0)},c2v:function(){gx.O.AV8cRemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKREMESSARETORNOTAMANHO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOTAMANHO",gxz:"ZV9cRemessaRetornoTamanho",gxold:"OV9cRemessaRetornoTamanho",gxvar:"AV9cRemessaRetornoTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cRemessaRetornoTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cRemessaRetornoTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOTAMANHO",gx.O.AV9cRemessaRetornoTamanho,0)},c2v:function(){gx.O.AV9cRemessaRetornoTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOTAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKREMESSARETORNOBANCOEMPID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOBANCOEMPID",gxz:"ZV10cRemessaRetornoBancoEmpId",gxold:"OV10cRemessaRetornoBancoEmpId",gxvar:"AV10cRemessaRetornoBancoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cRemessaRetornoBancoEmpId=Value},v2z:function(Value){gx.O.ZV10cRemessaRetornoBancoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOBANCOEMPID",gx.O.AV10cRemessaRetornoBancoEmpId,0)},c2v:function(){gx.O.AV10cRemessaRetornoBancoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOBANCOEMPID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKREMESSARETORNOBANCOID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOBANCOID",gxz:"ZV11cRemessaRetornoBancoId",gxold:"OV11cRemessaRetornoBancoId",gxvar:"AV11cRemessaRetornoBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cRemessaRetornoBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cRemessaRetornoBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOBANCOID",gx.O.AV11cRemessaRetornoBancoId,0)},c2v:function(){gx.O.AV11cRemessaRetornoBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKREMESSARETORNOEXTENSAOREM", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOEXTENSAOREM",gxz:"ZV12cRemessaRetornoExtensaoRem",gxold:"OV12cRemessaRetornoExtensaoRem",gxvar:"AV12cRemessaRetornoExtensaoRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cRemessaRetornoExtensaoRem=Value},v2z:function(Value){gx.O.ZV12cRemessaRetornoExtensaoRem=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOEXTENSAOREM",gx.O.AV12cRemessaRetornoExtensaoRem,0)},c2v:function(){gx.O.AV12cRemessaRetornoExtensaoRem=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOEXTENSAOREM")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOEMPRESAID",gxz:"Z2784RemessaRetornoEmpresaId",gxold:"O2784RemessaRetornoEmpresaId",gxvar:"A2784RemessaRetornoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2784RemessaRetornoEmpresaId=Value},v2z:function(Value){gx.O.Z2784RemessaRetornoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2784RemessaRetornoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2784RemessaRetornoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNODESCRICAO",gxz:"Z2786RemessaRetornoDescricao",gxold:"O2786RemessaRetornoDescricao",gxvar:"A2786RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2786RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2786RemessaRetornoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A2786RemessaRetornoDescricao,0)},c2v:function(){gx.O.A2786RemessaRetornoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTAMANHO",gxz:"Z2787RemessaRetornoTamanho",gxold:"O2787RemessaRetornoTamanho",gxvar:"A2787RemessaRetornoTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2787RemessaRetornoTamanho=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(51),gx.O.A2787RemessaRetornoTamanho,0)},c2v:function(){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOBANCOEMPID",gxz:"Z2783RemessaRetornoBancoEmpId",gxold:"O2783RemessaRetornoBancoEmpId",gxvar:"A2783RemessaRetornoBancoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2783RemessaRetornoBancoEmpId=Value},v2z:function(Value){gx.O.Z2783RemessaRetornoBancoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOBANCOEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A2783RemessaRetornoBancoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2783RemessaRetornoBancoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOBANCOEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOBANCOID",gxz:"Z2781RemessaRetornoBancoId",gxold:"O2781RemessaRetornoBancoId",gxvar:"A2781RemessaRetornoBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2781RemessaRetornoBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2781RemessaRetornoBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOBANCOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2781RemessaRetornoBancoId,0)},c2v:function(){gx.O.A2781RemessaRetornoBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOBANCOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:5,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOEXTENSAOREM",gxz:"Z2789RemessaRetornoExtensaoRem",gxold:"O2789RemessaRetornoExtensaoRem",gxvar:"A2789RemessaRetornoExtensaoRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2789RemessaRetornoExtensaoRem=Value},v2z:function(Value){gx.O.Z2789RemessaRetornoExtensaoRem=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOEXTENSAOREM",row || gx.fn.currentGridRowImpl(51),gx.O.A2789RemessaRetornoExtensaoRem,0)},c2v:function(){gx.O.A2789RemessaRetornoExtensaoRem=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOEXTENSAOREM",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTIPO",gxz:"Z2792RemessaRetornoTipo",gxold:"O2792RemessaRetornoTipo",gxvar:"A2792RemessaRetornoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2792RemessaRetornoTipo=Value},v2z:function(Value){gx.O.Z2792RemessaRetornoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A2792RemessaRetornoTipo,0)},c2v:function(){gx.O.A2792RemessaRetornoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cRemessaRetornoEmpresaId = "" ;
   this.ZV6cRemessaRetornoEmpresaId = "" ;
   this.OV6cRemessaRetornoEmpresaId = "" ;
   this.AV7cRemessaRetornoId = 0 ;
   this.ZV7cRemessaRetornoId = 0 ;
   this.OV7cRemessaRetornoId = 0 ;
   this.AV8cRemessaRetornoDescricao = "" ;
   this.ZV8cRemessaRetornoDescricao = "" ;
   this.OV8cRemessaRetornoDescricao = "" ;
   this.AV9cRemessaRetornoTamanho = 0 ;
   this.ZV9cRemessaRetornoTamanho = 0 ;
   this.OV9cRemessaRetornoTamanho = 0 ;
   this.AV10cRemessaRetornoBancoEmpId = "" ;
   this.ZV10cRemessaRetornoBancoEmpId = "" ;
   this.OV10cRemessaRetornoBancoEmpId = "" ;
   this.AV11cRemessaRetornoBancoId = 0 ;
   this.ZV11cRemessaRetornoBancoId = 0 ;
   this.OV11cRemessaRetornoBancoId = 0 ;
   this.AV12cRemessaRetornoExtensaoRem = "" ;
   this.ZV12cRemessaRetornoExtensaoRem = "" ;
   this.OV12cRemessaRetornoExtensaoRem = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2784RemessaRetornoEmpresaId = "" ;
   this.O2784RemessaRetornoEmpresaId = "" ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.Z2786RemessaRetornoDescricao = "" ;
   this.O2786RemessaRetornoDescricao = "" ;
   this.Z2787RemessaRetornoTamanho = 0 ;
   this.O2787RemessaRetornoTamanho = 0 ;
   this.Z2783RemessaRetornoBancoEmpId = "" ;
   this.O2783RemessaRetornoBancoEmpId = "" ;
   this.Z2781RemessaRetornoBancoId = 0 ;
   this.O2781RemessaRetornoBancoId = 0 ;
   this.Z2789RemessaRetornoExtensaoRem = "" ;
   this.O2789RemessaRetornoExtensaoRem = "" ;
   this.Z2792RemessaRetornoTipo = "" ;
   this.O2792RemessaRetornoTipo = "" ;
   this.AV6cRemessaRetornoEmpresaId = "" ;
   this.AV7cRemessaRetornoId = 0 ;
   this.AV8cRemessaRetornoDescricao = "" ;
   this.AV9cRemessaRetornoTamanho = 0 ;
   this.AV10cRemessaRetornoBancoEmpId = "" ;
   this.AV11cRemessaRetornoBancoId = 0 ;
   this.AV12cRemessaRetornoExtensaoRem = "" ;
   this.AV13pRemessaRetornoEmpresaId = "" ;
   this.AV14pRemessaRetornoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2786RemessaRetornoDescricao = "" ;
   this.A2787RemessaRetornoTamanho = 0 ;
   this.A2783RemessaRetornoBancoEmpId = "" ;
   this.A2781RemessaRetornoBancoId = 0 ;
   this.A2789RemessaRetornoExtensaoRem = "" ;
   this.A2792RemessaRetornoTipo = "" ;
   this.Events = {"e131nh2_client": ["ENTER", true] ,"e141nh1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV9cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV10cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV11cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV12cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'}],[{av:'AV13pRemessaRetornoEmpresaId',fld:'vPREMESSARETORNOEMPRESAID'},{av:'AV14pRemessaRetornoId',fld:'vPREMESSARETORNOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV9cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV10cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV11cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV12cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV9cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV10cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV11cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV12cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV9cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV10cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV11cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV12cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV9cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV10cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV11cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV12cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'}],[]];
   this.setVCMap("AV13pRemessaRetornoEmpresaId", "vPREMESSARETORNOEMPRESAID", 0, "char");
   this.setVCMap("AV14pRemessaRetornoId", "vPREMESSARETORNOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0830());