/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:20:15.81
*/
gx.evt.autoSkip = false;
gx.define('hcorrigecodigoecommerce', false, function () {
   this.ServerClass =  "hcorrigecodigoecommerce" ;
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
   this.e122gy2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e132gy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25,28,30,34,35,36,37,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hcorrigecodigoecommerce",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(11692,34,"CODIGOECOTIPO","Tipo","","CodigoEcoTipo","char",0,"px",15,15,"left",null,[],11692,"CodigoEcoTipo",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11693,35,"CODIGOECOTABELA","Tabela","","CodigoEcoTabela","svchar",0,"px",60,60,"left",null,[],11693,"CodigoEcoTabela",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11698,36,"CODIGOECOINTERNO","Cod Interno","","CodigoEcoInterno","svchar",0,"px",50,50,"left",null,[],11698,"CodigoEcoInterno",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11694,37,"CODIGOECOEXTERNO","Cod Externo","","CodigoEcoExterno","int",0,"px",18,18,"right",null,[],11694,"CodigoEcoExterno",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Exc","vEXC",38,0,"px",17,"px",null,"","exc","Image","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCODIGOECOEXTERNO",gxz:"ZV5CodigoEcoExterno",gxold:"OV5CodigoEcoExterno",gxvar:"AV5CodigoEcoExterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5CodigoEcoExterno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5CodigoEcoExterno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOECOEXTERNO",gx.O.AV5CodigoEcoExterno,0)},c2v:function(){gx.O.AV5CodigoEcoExterno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOECOEXTERNO",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCODIGOECOINTERNO",gxz:"ZV6CodigoEcoInterno",gxold:"OV6CodigoEcoInterno",gxvar:"AV6CodigoEcoInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6CodigoEcoInterno=Value},v2z:function(Value){gx.O.ZV6CodigoEcoInterno=Value},v2c:function(){gx.fn.setControlValue("vCODIGOECOINTERNO",gx.O.AV6CodigoEcoInterno,0)},c2v:function(){gx.O.AV6CodigoEcoInterno=this.val()},val:function(){return gx.fn.getControlValue("vCODIGOECOINTERNO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCODIGOECOTABELA",gxz:"ZV7CodigoEcoTabela",gxold:"OV7CodigoEcoTabela",gxvar:"AV7CodigoEcoTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CodigoEcoTabela=Value},v2z:function(Value){gx.O.ZV7CodigoEcoTabela=Value},v2c:function(){gx.fn.setControlValue("vCODIGOECOTABELA",gx.O.AV7CodigoEcoTabela,0)},c2v:function(){gx.O.AV7CodigoEcoTabela=this.val()},val:function(){return gx.fn.getControlValue("vCODIGOECOTABELA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCODIGOECOTIPO",gxz:"ZV8CodigoEcoTipo",gxold:"OV8CodigoEcoTipo",gxvar:"AV8CodigoEcoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8CodigoEcoTipo=Value},v2z:function(Value){gx.O.ZV8CodigoEcoTipo=Value},v2c:function(){gx.fn.setControlValue("vCODIGOECOTIPO",gx.O.AV8CodigoEcoTipo,0)},c2v:function(){gx.O.AV8CodigoEcoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCODIGOECOTIPO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vSNPESQUISAR",gxz:"ZV10SNPesquisar",gxold:"OV10SNPesquisar",gxvar:"AV10SNPesquisar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10SNPesquisar=Value},v2z:function(Value){gx.O.ZV10SNPesquisar=Value},v2c:function(){gx.fn.setControlValue("vSNPESQUISAR",gx.O.AV10SNPesquisar,0)},c2v:function(){gx.O.AV10SNPesquisar=this.val()},val:function(){return gx.fn.getControlValue("vSNPESQUISAR")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOECOTIPO",gxz:"Z11692CodigoEcoTipo",gxold:"O11692CodigoEcoTipo",gxvar:"A11692CodigoEcoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11692CodigoEcoTipo=Value},v2z:function(Value){gx.O.Z11692CodigoEcoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("CODIGOECOTIPO",row || gx.fn.currentGridRowImpl(33),gx.O.A11692CodigoEcoTipo,0)},c2v:function(){gx.O.A11692CodigoEcoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIGOECOTIPO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOECOTABELA",gxz:"Z11693CodigoEcoTabela",gxold:"O11693CodigoEcoTabela",gxvar:"A11693CodigoEcoTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11693CodigoEcoTabela=Value},v2z:function(Value){gx.O.Z11693CodigoEcoTabela=Value},v2c:function(row){gx.fn.setGridControlValue("CODIGOECOTABELA",row || gx.fn.currentGridRowImpl(33),gx.O.A11693CodigoEcoTabela,0)},c2v:function(){gx.O.A11693CodigoEcoTabela=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIGOECOTABELA",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOECOINTERNO",gxz:"Z11698CodigoEcoInterno",gxold:"O11698CodigoEcoInterno",gxvar:"A11698CodigoEcoInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11698CodigoEcoInterno=Value},v2z:function(Value){gx.O.Z11698CodigoEcoInterno=Value},v2c:function(row){gx.fn.setGridControlValue("CODIGOECOINTERNO",row || gx.fn.currentGridRowImpl(33),gx.O.A11698CodigoEcoInterno,0)},c2v:function(){gx.O.A11698CodigoEcoInterno=this.val()},val:function(row){return gx.fn.getGridControlValue("CODIGOECOINTERNO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOECOEXTERNO",gxz:"Z11694CodigoEcoExterno",gxold:"O11694CodigoEcoExterno",gxvar:"A11694CodigoEcoExterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11694CodigoEcoExterno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11694CodigoEcoExterno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODIGOECOEXTERNO",row || gx.fn.currentGridRowImpl(33),gx.O.A11694CodigoEcoExterno,0)},c2v:function(){gx.O.A11694CodigoEcoExterno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODIGOECOEXTERNO",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEXC",gxz:"ZV9exc",gxold:"OV9exc",gxvar:"AV9exc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9exc=Value},v2z:function(Value){gx.O.ZV9exc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXC",row || gx.fn.currentGridRowImpl(33),gx.O.AV9exc,gx.O.AV13Exc_GXI)},c2v:function(){gx.O.AV13Exc_GXI=this.val_GXI();gx.O.AV9exc=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXC",row || gx.fn.currentGridRowImpl(33))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXC_GXI",row || gx.fn.currentGridRowImpl(33))}, gxvar_GXI:'AV13Exc_GXI',nac:gx.falseFn};
   this.AV5CodigoEcoExterno = 0 ;
   this.ZV5CodigoEcoExterno = 0 ;
   this.OV5CodigoEcoExterno = 0 ;
   this.AV6CodigoEcoInterno = "" ;
   this.ZV6CodigoEcoInterno = "" ;
   this.OV6CodigoEcoInterno = "" ;
   this.AV7CodigoEcoTabela = "" ;
   this.ZV7CodigoEcoTabela = "" ;
   this.OV7CodigoEcoTabela = "" ;
   this.AV8CodigoEcoTipo = "" ;
   this.ZV8CodigoEcoTipo = "" ;
   this.OV8CodigoEcoTipo = "" ;
   this.AV10SNPesquisar = "" ;
   this.ZV10SNPesquisar = "" ;
   this.OV10SNPesquisar = "" ;
   this.Z11692CodigoEcoTipo = "" ;
   this.O11692CodigoEcoTipo = "" ;
   this.Z11693CodigoEcoTabela = "" ;
   this.O11693CodigoEcoTabela = "" ;
   this.Z11698CodigoEcoInterno = "" ;
   this.O11698CodigoEcoInterno = "" ;
   this.Z11694CodigoEcoExterno = 0 ;
   this.O11694CodigoEcoExterno = 0 ;
   this.ZV9exc = "" ;
   this.OV9exc = "" ;
   this.AV5CodigoEcoExterno = 0 ;
   this.AV6CodigoEcoInterno = "" ;
   this.AV7CodigoEcoTabela = "" ;
   this.AV8CodigoEcoTipo = "" ;
   this.AV10SNPesquisar = "" ;
   this.A11692CodigoEcoTipo = "" ;
   this.A11693CodigoEcoTabela = "" ;
   this.A11698CodigoEcoInterno = "" ;
   this.A11694CodigoEcoExterno = 0 ;
   this.AV9exc = "" ;
   this.Events = {"e122gy2_client": ["ENTER", true] ,"e132gy2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV5CodigoEcoExterno',fld:'vCODIGOECOEXTERNO'},{av:'AV6CodigoEcoInterno',fld:'vCODIGOECOINTERNO'},{av:'AV7CodigoEcoTabela',fld:'vCODIGOECOTABELA'},{av:'AV8CodigoEcoTipo',fld:'vCODIGOECOTIPO'},{av:'AV10SNPesquisar',fld:'vSNPESQUISAR'}],[]];
   Grid1Container.addRefreshingVar(this.GXValidFnc[10]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[15]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[20]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[25]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[30]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcorrigecodigoecommerce());
