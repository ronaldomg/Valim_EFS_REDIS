/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:34:36.77
*/
gx.evt.autoSkip = false;
gx.define('gx0ar0', false, function () {
   this.ServerClass =  "gx0ar0" ;
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
      this.AV13pListaServicoId=gx.fn.getIntegerValue("vPLISTASERVICOID",'.') ;
   };
   this.e131pd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ar0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2983,53,"LISTASERVICOID","Código da Lista de Serviço","","ListaServicoId","int",0,"px",6,6,"right",null,[],2983,"ListaServicoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2981,54,"LISTASERVICOUSUARIOALT","Usuário de Alteração","","ListaServicoUsuarioAlt","char",0,"px",12,12,"left",null,[],2981,"ListaServicoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2982,55,"LISTASERVICODATAHORAALT","Data/Hora de Alteração","","ListaServicoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],2982,"ListaServicoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9276,56,"LISTASERVICOPERCISS","Percentual ISS","","ListaServicoPercISS","decimal",0,"px",8,8,"right",null,[],9276,"ListaServicoPercISS",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9277,57,"LISTASERVICOPERCINSS","Percentual INSS","","ListaServicoPercINSS","decimal",0,"px",6,6,"right",null,[],9277,"ListaServicoPercINSS",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9278,58,"LISTASERVICOPERCPIS","Percentual  PIS","","ListaServicoPercPIS","decimal",0,"px",6,6,"right",null,[],9278,"ListaServicoPercPIS",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLISTASERVICOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLISTASERVICOID",gxz:"ZV6cListaServicoId",gxold:"OV6cListaServicoId",gxvar:"AV6cListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cListaServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLISTASERVICOID",gx.O.AV6cListaServicoId,0)},c2v:function(){gx.O.AV6cListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLISTASERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKLISTASERVICOUSUARIOALT", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLISTASERVICOUSUARIOALT",gxz:"ZV7cListaServicoUsuarioAlt",gxold:"OV7cListaServicoUsuarioAlt",gxvar:"AV7cListaServicoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cListaServicoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV7cListaServicoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCLISTASERVICOUSUARIOALT",gx.O.AV7cListaServicoUsuarioAlt,0)},c2v:function(){gx.O.AV7cListaServicoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCLISTASERVICOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKLISTASERVICODATAHORAALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLISTASERVICODATAHORAALT",gxz:"ZV8cListaServicoDataHoraAlt",gxold:"OV8cListaServicoDataHoraAlt",gxvar:"AV8cListaServicoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cListaServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cListaServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCLISTASERVICODATAHORAALT",gx.O.AV8cListaServicoDataHoraAlt,0)},c2v:function(){gx.O.AV8cListaServicoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCLISTASERVICODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKLISTASERVICOPERCISS", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLISTASERVICOPERCISS",gxz:"ZV9cListaServicoPercISS",gxold:"OV9cListaServicoPercISS",gxvar:"AV9cListaServicoPercISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cListaServicoPercISS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9cListaServicoPercISS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCLISTASERVICOPERCISS",gx.O.AV9cListaServicoPercISS,4,',')},c2v:function(){gx.O.AV9cListaServicoPercISS=this.val()},val:function(){return gx.fn.getDecimalValue("vCLISTASERVICOPERCISS",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKLISTASERVICOPERCINSS", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLISTASERVICOPERCINSS",gxz:"ZV10cListaServicoPercINSS",gxold:"OV10cListaServicoPercINSS",gxvar:"AV10cListaServicoPercINSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cListaServicoPercINSS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10cListaServicoPercINSS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCLISTASERVICOPERCINSS",gx.O.AV10cListaServicoPercINSS,2,',')},c2v:function(){gx.O.AV10cListaServicoPercINSS=this.val()},val:function(){return gx.fn.getDecimalValue("vCLISTASERVICOPERCINSS",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKLISTASERVICOPERCPIS", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLISTASERVICOPERCPIS",gxz:"ZV11cListaServicoPercPIS",gxold:"OV11cListaServicoPercPIS",gxvar:"AV11cListaServicoPercPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cListaServicoPercPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cListaServicoPercPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCLISTASERVICOPERCPIS",gx.O.AV11cListaServicoPercPIS,2,',')},c2v:function(){gx.O.AV11cListaServicoPercPIS=this.val()},val:function(){return gx.fn.getDecimalValue("vCLISTASERVICOPERCPIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKLISTASERVICOPERCCOFINS", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLISTASERVICOPERCCOFINS",gxz:"ZV12cListaServicoPercCOFINS",gxold:"OV12cListaServicoPercCOFINS",gxvar:"AV12cListaServicoPercCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cListaServicoPercCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12cListaServicoPercCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCLISTASERVICOPERCCOFINS",gx.O.AV12cListaServicoPercCOFINS,2,',')},c2v:function(){gx.O.AV12cListaServicoPercCOFINS=this.val()},val:function(){return gx.fn.getDecimalValue("vCLISTASERVICOPERCCOFINS",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOID",gxz:"Z2983ListaServicoId",gxold:"O2983ListaServicoId",gxvar:"A2983ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2983ListaServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2983ListaServicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LISTASERVICOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2983ListaServicoId,0)},c2v:function(){gx.O.A2983ListaServicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LISTASERVICOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOUSUARIOALT",gxz:"Z2981ListaServicoUsuarioAlt",gxold:"O2981ListaServicoUsuarioAlt",gxvar:"A2981ListaServicoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2981ListaServicoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2981ListaServicoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("LISTASERVICOUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A2981ListaServicoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2981ListaServicoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("LISTASERVICOUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICODATAHORAALT",gxz:"Z2982ListaServicoDataHoraAlt",gxold:"O2982ListaServicoDataHoraAlt",gxvar:"A2982ListaServicoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2982ListaServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2982ListaServicoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LISTASERVICODATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A2982ListaServicoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2982ListaServicoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LISTASERVICODATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCISS",gxz:"Z9276ListaServicoPercISS",gxold:"O9276ListaServicoPercISS",gxvar:"A9276ListaServicoPercISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9276ListaServicoPercISS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9276ListaServicoPercISS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LISTASERVICOPERCISS",row || gx.fn.currentGridRowImpl(51),gx.O.A9276ListaServicoPercISS,4,',')},c2v:function(){gx.O.A9276ListaServicoPercISS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LISTASERVICOPERCISS",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCINSS",gxz:"Z9277ListaServicoPercINSS",gxold:"O9277ListaServicoPercINSS",gxvar:"A9277ListaServicoPercINSS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9277ListaServicoPercINSS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9277ListaServicoPercINSS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LISTASERVICOPERCINSS",row || gx.fn.currentGridRowImpl(51),gx.O.A9277ListaServicoPercINSS,2,',')},c2v:function(){gx.O.A9277ListaServicoPercINSS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LISTASERVICOPERCINSS",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOPERCPIS",gxz:"Z9278ListaServicoPercPIS",gxold:"O9278ListaServicoPercPIS",gxvar:"A9278ListaServicoPercPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9278ListaServicoPercPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9278ListaServicoPercPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LISTASERVICOPERCPIS",row || gx.fn.currentGridRowImpl(51),gx.O.A9278ListaServicoPercPIS,2,',')},c2v:function(){gx.O.A9278ListaServicoPercPIS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LISTASERVICOPERCPIS",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cListaServicoId = 0 ;
   this.ZV6cListaServicoId = 0 ;
   this.OV6cListaServicoId = 0 ;
   this.AV7cListaServicoUsuarioAlt = "" ;
   this.ZV7cListaServicoUsuarioAlt = "" ;
   this.OV7cListaServicoUsuarioAlt = "" ;
   this.AV8cListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.ZV8cListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.OV8cListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.AV9cListaServicoPercISS = 0 ;
   this.ZV9cListaServicoPercISS = 0 ;
   this.OV9cListaServicoPercISS = 0 ;
   this.AV10cListaServicoPercINSS = 0 ;
   this.ZV10cListaServicoPercINSS = 0 ;
   this.OV10cListaServicoPercINSS = 0 ;
   this.AV11cListaServicoPercPIS = 0 ;
   this.ZV11cListaServicoPercPIS = 0 ;
   this.OV11cListaServicoPercPIS = 0 ;
   this.AV12cListaServicoPercCOFINS = 0 ;
   this.ZV12cListaServicoPercCOFINS = 0 ;
   this.OV12cListaServicoPercCOFINS = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2983ListaServicoId = 0 ;
   this.O2983ListaServicoId = 0 ;
   this.Z2981ListaServicoUsuarioAlt = "" ;
   this.O2981ListaServicoUsuarioAlt = "" ;
   this.Z2982ListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.O2982ListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.Z9276ListaServicoPercISS = 0 ;
   this.O9276ListaServicoPercISS = 0 ;
   this.Z9277ListaServicoPercINSS = 0 ;
   this.O9277ListaServicoPercINSS = 0 ;
   this.Z9278ListaServicoPercPIS = 0 ;
   this.O9278ListaServicoPercPIS = 0 ;
   this.AV6cListaServicoId = 0 ;
   this.AV7cListaServicoUsuarioAlt = "" ;
   this.AV8cListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.AV9cListaServicoPercISS = 0 ;
   this.AV10cListaServicoPercINSS = 0 ;
   this.AV11cListaServicoPercPIS = 0 ;
   this.AV12cListaServicoPercCOFINS = 0 ;
   this.AV13pListaServicoId = 0 ;
   this.A9279ListaServicoPercCOFINS = 0 ;
   this.AV5LinkSelection = "" ;
   this.A2983ListaServicoId = 0 ;
   this.A2981ListaServicoUsuarioAlt = "" ;
   this.A2982ListaServicoDataHoraAlt = gx.date.nullDate() ;
   this.A9276ListaServicoPercISS = 0 ;
   this.A9277ListaServicoPercINSS = 0 ;
   this.A9278ListaServicoPercPIS = 0 ;
   this.Events = {"e131pd2_client": ["ENTER", true] ,"e141pd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cListaServicoId',fld:'vCLISTASERVICOID'},{av:'AV7cListaServicoUsuarioAlt',fld:'vCLISTASERVICOUSUARIOALT'},{av:'AV8cListaServicoDataHoraAlt',fld:'vCLISTASERVICODATAHORAALT'},{av:'AV9cListaServicoPercISS',fld:'vCLISTASERVICOPERCISS'},{av:'AV10cListaServicoPercINSS',fld:'vCLISTASERVICOPERCINSS'},{av:'AV11cListaServicoPercPIS',fld:'vCLISTASERVICOPERCPIS'},{av:'AV12cListaServicoPercCOFINS',fld:'vCLISTASERVICOPERCCOFINS'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2983ListaServicoId',fld:'LISTASERVICOID'}],[{av:'AV13pListaServicoId',fld:'vPLISTASERVICOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cListaServicoId',fld:'vCLISTASERVICOID'},{av:'AV7cListaServicoUsuarioAlt',fld:'vCLISTASERVICOUSUARIOALT'},{av:'AV8cListaServicoDataHoraAlt',fld:'vCLISTASERVICODATAHORAALT'},{av:'AV9cListaServicoPercISS',fld:'vCLISTASERVICOPERCISS'},{av:'AV10cListaServicoPercINSS',fld:'vCLISTASERVICOPERCINSS'},{av:'AV11cListaServicoPercPIS',fld:'vCLISTASERVICOPERCPIS'},{av:'AV12cListaServicoPercCOFINS',fld:'vCLISTASERVICOPERCCOFINS'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cListaServicoId',fld:'vCLISTASERVICOID'},{av:'AV7cListaServicoUsuarioAlt',fld:'vCLISTASERVICOUSUARIOALT'},{av:'AV8cListaServicoDataHoraAlt',fld:'vCLISTASERVICODATAHORAALT'},{av:'AV9cListaServicoPercISS',fld:'vCLISTASERVICOPERCISS'},{av:'AV10cListaServicoPercINSS',fld:'vCLISTASERVICOPERCINSS'},{av:'AV11cListaServicoPercPIS',fld:'vCLISTASERVICOPERCPIS'},{av:'AV12cListaServicoPercCOFINS',fld:'vCLISTASERVICOPERCCOFINS'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cListaServicoId',fld:'vCLISTASERVICOID'},{av:'AV7cListaServicoUsuarioAlt',fld:'vCLISTASERVICOUSUARIOALT'},{av:'AV8cListaServicoDataHoraAlt',fld:'vCLISTASERVICODATAHORAALT'},{av:'AV9cListaServicoPercISS',fld:'vCLISTASERVICOPERCISS'},{av:'AV10cListaServicoPercINSS',fld:'vCLISTASERVICOPERCINSS'},{av:'AV11cListaServicoPercPIS',fld:'vCLISTASERVICOPERCPIS'},{av:'AV12cListaServicoPercCOFINS',fld:'vCLISTASERVICOPERCCOFINS'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cListaServicoId',fld:'vCLISTASERVICOID'},{av:'AV7cListaServicoUsuarioAlt',fld:'vCLISTASERVICOUSUARIOALT'},{av:'AV8cListaServicoDataHoraAlt',fld:'vCLISTASERVICODATAHORAALT'},{av:'AV9cListaServicoPercISS',fld:'vCLISTASERVICOPERCISS'},{av:'AV10cListaServicoPercINSS',fld:'vCLISTASERVICOPERCINSS'},{av:'AV11cListaServicoPercPIS',fld:'vCLISTASERVICOPERCPIS'},{av:'AV12cListaServicoPercCOFINS',fld:'vCLISTASERVICOPERCCOFINS'}],[]];
   this.setVCMap("AV13pListaServicoId", "vPLISTASERVICOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ar0());