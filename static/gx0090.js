/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:1.62
*/
gx.evt.autoSkip = false;
gx.define('gx0090', false, function () {
   this.ServerClass =  "gx0090" ;
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
      this.AV13pCidadesId=gx.fn.getIntegerValue("vPCIDADESID",'.') ;
   };
   this.Validv_Ccidadesuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCCIDADESUF");
         this.AnyError  = 0;
         if ( ! ( this.AV10cCidadesUF == "" || this.AV10cCidadesUF == "AC" || this.AV10cCidadesUF == "AL" || this.AV10cCidadesUF == "AP" || this.AV10cCidadesUF == "AM" || this.AV10cCidadesUF == "BA" || this.AV10cCidadesUF == "CE" || this.AV10cCidadesUF == "DF" || this.AV10cCidadesUF == "ES" || this.AV10cCidadesUF == "GO" || this.AV10cCidadesUF == "MA" || this.AV10cCidadesUF == "MT" || this.AV10cCidadesUF == "MS" || this.AV10cCidadesUF == "MG" || this.AV10cCidadesUF == "PA" || this.AV10cCidadesUF == "PB" || this.AV10cCidadesUF == "PR" || this.AV10cCidadesUF == "PE" || this.AV10cCidadesUF == "PI" || this.AV10cCidadesUF == "RJ" || this.AV10cCidadesUF == "RN" || this.AV10cCidadesUF == "RS" || this.AV10cCidadesUF == "RO" || this.AV10cCidadesUF == "RR" || this.AV10cCidadesUF == "SC" || this.AV10cCidadesUF == "SP" || this.AV10cCidadesUF == "SE" || this.AV10cCidadesUF == "TO" || this.AV10cCidadesUF == "EX" || (""==this.AV10cCidadesUF) ) )
         {
            try {
               gxballoon.setError("Campo cCidadesUF fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e131hi2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hi1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0090",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(147,53,"CIDADESID","Cidade","","CidadesId","int",0,"px",8,8,"right",null,[],147,"CidadesId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(155,54,"CIDADESCODIGOCORREIO","Código do Correio","","CidadesCodigoCorreio","int",0,"px",7,7,"right",null,[],155,"CidadesCodigoCorreio",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(156,55,"CIDADESNOCEP","Cidades No Cep","","CidadesNoCep","char",0,"px",9,9,"left",null,[],156,"CidadesNoCep",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(149,56,"CIDADESNOME","Nome da Cidade","Selecionar","CidadesNome","svchar",0,"px",40,40,"left",null,[],149,"CidadesNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(157,57,"CIDADESUF","UF da Cidade","CidadesUF","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(158,58,"CIDADESCODIBGE","Código Ibge","","CidadesCodIbge","int",0,"px",7,7,"right",null,[],158,"CidadesCodIbge",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(159,59,"PAISESID","Código País","","PaisesId","int",0,"px",7,7,"right",null,[],159,"PaisesId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(852,60,"CIDADESUSUARIOID","Usuário","","CidadesUsuarioId","char",0,"px",12,12,"left",null,[],852,"CidadesUsuarioId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCIDADESID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESID",gxz:"ZV6cCidadesId",gxold:"OV6cCidadesId",gxvar:"AV6cCidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCIDADESID",gx.O.AV6cCidadesId,0)},c2v:function(){gx.O.AV6cCidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCIDADESCODIGOCORREIO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESCODIGOCORREIO",gxz:"ZV7cCidadesCodigoCorreio",gxold:"OV7cCidadesCodigoCorreio",gxvar:"AV7cCidadesCodigoCorreio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCidadesCodigoCorreio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cCidadesCodigoCorreio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCIDADESCODIGOCORREIO",gx.O.AV7cCidadesCodigoCorreio,0)},c2v:function(){gx.O.AV7cCidadesCodigoCorreio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESCODIGOCORREIO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCIDADESNOCEP", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESNOCEP",gxz:"ZV8cCidadesNoCep",gxold:"OV8cCidadesNoCep",gxvar:"AV8cCidadesNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCidadesNoCep=Value},v2z:function(Value){gx.O.ZV8cCidadesNoCep=Value},v2c:function(){gx.fn.setControlValue("vCCIDADESNOCEP",gx.O.AV8cCidadesNoCep,0)},c2v:function(){gx.O.AV8cCidadesNoCep=this.val()},val:function(){return gx.fn.getControlValue("vCCIDADESNOCEP")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCIDADESNOME", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESNOME",gxz:"ZV9cCidadesNome",gxold:"OV9cCidadesNome",gxvar:"AV9cCidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCidadesNome=Value},v2z:function(Value){gx.O.ZV9cCidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCCIDADESNOME",gx.O.AV9cCidadesNome,0)},c2v:function(){gx.O.AV9cCidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCIDADESUF", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ccidadesuf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESUF",gxz:"ZV10cCidadesUF",gxold:"OV10cCidadesUF",gxvar:"AV10cCidadesUF",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cCidadesUF=Value},v2z:function(Value){gx.O.ZV10cCidadesUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCCIDADESUF",gx.O.AV10cCidadesUF)},c2v:function(){gx.O.AV10cCidadesUF=this.val()},val:function(){return gx.fn.getControlValue("vCCIDADESUF")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCIDADESCODIBGE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESCODIBGE",gxz:"ZV11cCidadesCodIbge",gxold:"OV11cCidadesCodIbge",gxvar:"AV11cCidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cCidadesCodIbge=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCIDADESCODIBGE",gx.O.AV11cCidadesCodIbge,0)},c2v:function(){gx.O.AV11cCidadesCodIbge=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESCODIBGE",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPAISESID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESID",gxz:"ZV12cPaisesId",gxold:"OV12cPaisesId",gxvar:"AV12cPaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cPaisesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPAISESID",gx.O.AV12cPaisesId,0)},c2v:function(){gx.O.AV12cPaisesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESID",row || gx.fn.currentGridRowImpl(51),gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIGOCORREIO",gxz:"Z155CidadesCodigoCorreio",gxold:"O155CidadesCodigoCorreio",gxvar:"A155CidadesCodigoCorreio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A155CidadesCodigoCorreio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z155CidadesCodigoCorreio=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESCODIGOCORREIO",row || gx.fn.currentGridRowImpl(51),gx.O.A155CidadesCodigoCorreio,0)},c2v:function(){gx.O.A155CidadesCodigoCorreio=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESCODIGOCORREIO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:9,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOCEP",gxz:"Z156CidadesNoCep",gxold:"O156CidadesNoCep",gxvar:"A156CidadesNoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A156CidadesNoCep=Value},v2z:function(Value){gx.O.Z156CidadesNoCep=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESNOCEP",row || gx.fn.currentGridRowImpl(51),gx.O.A156CidadesNoCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A156CidadesNoCep=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESNOCEP",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(51),gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESUF",gxz:"Z157CidadesUF",gxold:"O157CidadesUF",gxvar:"A157CidadesUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A157CidadesUF=Value},v2z:function(Value){gx.O.Z157CidadesUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CIDADESUF",row || gx.fn.currentGridRowImpl(51),gx.O.A157CidadesUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A157CidadesUF=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESUF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIBGE",gxz:"Z158CidadesCodIbge",gxold:"O158CidadesCodIbge",gxvar:"A158CidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A158CidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.Z158CidadesCodIbge=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(51),gx.O.A158CidadesCodIbge,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A158CidadesCodIbge=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z159PaisesId",gxold:"O159PaisesId",gxvar:"A159PaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A159PaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z159PaisesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAISESID",row || gx.fn.currentGridRowImpl(51),gx.O.A159PaisesId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A159PaisesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAISESID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESUSUARIOID",gxz:"Z852CidadesUsuarioId",gxold:"O852CidadesUsuarioId",gxvar:"A852CidadesUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A852CidadesUsuarioId=Value},v2z:function(Value){gx.O.Z852CidadesUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A852CidadesUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A852CidadesUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cCidadesId = 0 ;
   this.ZV6cCidadesId = 0 ;
   this.OV6cCidadesId = 0 ;
   this.AV7cCidadesCodigoCorreio = 0 ;
   this.ZV7cCidadesCodigoCorreio = 0 ;
   this.OV7cCidadesCodigoCorreio = 0 ;
   this.AV8cCidadesNoCep = "" ;
   this.ZV8cCidadesNoCep = "" ;
   this.OV8cCidadesNoCep = "" ;
   this.AV9cCidadesNome = "" ;
   this.ZV9cCidadesNome = "" ;
   this.OV9cCidadesNome = "" ;
   this.AV10cCidadesUF = "" ;
   this.ZV10cCidadesUF = "" ;
   this.OV10cCidadesUF = "" ;
   this.AV11cCidadesCodIbge = 0 ;
   this.ZV11cCidadesCodIbge = 0 ;
   this.OV11cCidadesCodIbge = 0 ;
   this.AV12cPaisesId = 0 ;
   this.ZV12cPaisesId = 0 ;
   this.OV12cPaisesId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.Z155CidadesCodigoCorreio = 0 ;
   this.O155CidadesCodigoCorreio = 0 ;
   this.Z156CidadesNoCep = "" ;
   this.O156CidadesNoCep = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.Z157CidadesUF = "" ;
   this.O157CidadesUF = "" ;
   this.Z158CidadesCodIbge = 0 ;
   this.O158CidadesCodIbge = 0 ;
   this.Z159PaisesId = 0 ;
   this.O159PaisesId = 0 ;
   this.Z852CidadesUsuarioId = "" ;
   this.O852CidadesUsuarioId = "" ;
   this.AV6cCidadesId = 0 ;
   this.AV7cCidadesCodigoCorreio = 0 ;
   this.AV8cCidadesNoCep = "" ;
   this.AV9cCidadesNome = "" ;
   this.AV10cCidadesUF = "" ;
   this.AV11cCidadesCodIbge = 0 ;
   this.AV12cPaisesId = 0 ;
   this.AV13pCidadesId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A147CidadesId = 0 ;
   this.A155CidadesCodigoCorreio = 0 ;
   this.A156CidadesNoCep = "" ;
   this.A149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.A158CidadesCodIbge = 0 ;
   this.A159PaisesId = 0 ;
   this.A852CidadesUsuarioId = "" ;
   this.Events = {"e131hi2_client": ["ENTER", true] ,"e141hi1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesId',fld:'vCCIDADESID'},{av:'AV7cCidadesCodigoCorreio',fld:'vCCIDADESCODIGOCORREIO'},{av:'AV8cCidadesNoCep',fld:'vCCIDADESNOCEP'},{av:'AV9cCidadesNome',fld:'vCCIDADESNOME'},{av:'AV10cCidadesUF',fld:'vCCIDADESUF'},{av:'AV11cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV12cPaisesId',fld:'vCPAISESID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A147CidadesId',fld:'CIDADESID'}],[{av:'AV13pCidadesId',fld:'vPCIDADESID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesId',fld:'vCCIDADESID'},{av:'AV7cCidadesCodigoCorreio',fld:'vCCIDADESCODIGOCORREIO'},{av:'AV8cCidadesNoCep',fld:'vCCIDADESNOCEP'},{av:'AV9cCidadesNome',fld:'vCCIDADESNOME'},{av:'AV10cCidadesUF',fld:'vCCIDADESUF'},{av:'AV11cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV12cPaisesId',fld:'vCPAISESID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesId',fld:'vCCIDADESID'},{av:'AV7cCidadesCodigoCorreio',fld:'vCCIDADESCODIGOCORREIO'},{av:'AV8cCidadesNoCep',fld:'vCCIDADESNOCEP'},{av:'AV9cCidadesNome',fld:'vCCIDADESNOME'},{av:'AV10cCidadesUF',fld:'vCCIDADESUF'},{av:'AV11cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV12cPaisesId',fld:'vCPAISESID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesId',fld:'vCCIDADESID'},{av:'AV7cCidadesCodigoCorreio',fld:'vCCIDADESCODIGOCORREIO'},{av:'AV8cCidadesNoCep',fld:'vCCIDADESNOCEP'},{av:'AV9cCidadesNome',fld:'vCCIDADESNOME'},{av:'AV10cCidadesUF',fld:'vCCIDADESUF'},{av:'AV11cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV12cPaisesId',fld:'vCPAISESID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesId',fld:'vCCIDADESID'},{av:'AV7cCidadesCodigoCorreio',fld:'vCCIDADESCODIGOCORREIO'},{av:'AV8cCidadesNoCep',fld:'vCCIDADESNOCEP'},{av:'AV9cCidadesNome',fld:'vCCIDADESNOME'},{av:'AV10cCidadesUF',fld:'vCCIDADESUF'},{av:'AV11cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV12cPaisesId',fld:'vCPAISESID'}],[]];
   this.setVCMap("AV13pCidadesId", "vPCIDADESID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0090());
