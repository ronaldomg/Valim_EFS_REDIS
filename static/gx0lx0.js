/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:34.1
*/
gx.evt.autoSkip = false;
gx.define('gx0lx0', false, function () {
   this.ServerClass =  "gx0lx0" ;
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
      this.AV13pFCPUFEmpresaId=gx.fn.getControlValue("vPFCPUFEMPRESAID") ;
      this.AV14pFCPUFSequencia=gx.fn.getIntegerValue("vPFCPUFSEQUENCIA",'.') ;
   };
   this.Validv_Cfcpufcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFCPUFCODIGO");
         this.AnyError  = 0;
         if ( ! ( this.AV8cFCPUFCodigo == "" || this.AV8cFCPUFCodigo == "AC" || this.AV8cFCPUFCodigo == "AL" || this.AV8cFCPUFCodigo == "AP" || this.AV8cFCPUFCodigo == "AM" || this.AV8cFCPUFCodigo == "BA" || this.AV8cFCPUFCodigo == "CE" || this.AV8cFCPUFCodigo == "DF" || this.AV8cFCPUFCodigo == "ES" || this.AV8cFCPUFCodigo == "GO" || this.AV8cFCPUFCodigo == "MA" || this.AV8cFCPUFCodigo == "MT" || this.AV8cFCPUFCodigo == "MS" || this.AV8cFCPUFCodigo == "MG" || this.AV8cFCPUFCodigo == "PA" || this.AV8cFCPUFCodigo == "PB" || this.AV8cFCPUFCodigo == "PR" || this.AV8cFCPUFCodigo == "PE" || this.AV8cFCPUFCodigo == "PI" || this.AV8cFCPUFCodigo == "RJ" || this.AV8cFCPUFCodigo == "RN" || this.AV8cFCPUFCodigo == "RS" || this.AV8cFCPUFCodigo == "RO" || this.AV8cFCPUFCodigo == "RR" || this.AV8cFCPUFCodigo == "SC" || this.AV8cFCPUFCodigo == "SP" || this.AV8cFCPUFCodigo == "SE" || this.AV8cFCPUFCodigo == "TO" || this.AV8cFCPUFCodigo == "EX" || (""==this.AV8cFCPUFCodigo) ) )
         {
            try {
               gxballoon.setError("Campo cFCPUFCodigo fora do intervalo");
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
   this.e132882_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142881_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0lx0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10667,53,"FCPUFEMPRESAID","Id","","FCPUFEmpresaId","char",0,"px",10,10,"left",null,[],10667,"FCPUFEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10668,54,"FCPUFSEQUENCIA","FCPUFSequencia","","FCPUFSequencia","int",0,"px",6,6,"right",null,[],10668,"FCPUFSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(10686,55,"FCPUFCODIGO","FCPUFCodigo","FCPUFCodigo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(10688,56,"FCPUFPERCENTUAL","FCPUFPercentual","","FCPUFPercentual","decimal",0,"px",8,8,"right",null,[],10688,"FCPUFPercentual",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10669,57,"FCPUFNCMCODIGO","NCM","","FCPUFNCMCodigo","int",0,"px",8,8,"right",null,[],10669,"FCPUFNCMCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10689,58,"FCPUFUSUARIOALT","Alt","","FCPUFUsuarioAlt","char",0,"px",12,12,"left",null,[],10689,"FCPUFUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10687,59,"FCPUFDATAHORAALT","Hora Alt","","FCPUFDataHoraAlt","dtime",0,"px",16,16,"right",null,[],10687,"FCPUFDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFCPUFEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFCPUFEMPRESAID",gxz:"ZV6cFCPUFEmpresaId",gxold:"OV6cFCPUFEmpresaId",gxvar:"AV6cFCPUFEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFCPUFEmpresaId=Value},v2z:function(Value){gx.O.ZV6cFCPUFEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFCPUFEMPRESAID",gx.O.AV6cFCPUFEmpresaId,0)},c2v:function(){gx.O.AV6cFCPUFEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFCPUFEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFCPUFSEQUENCIA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFCPUFSEQUENCIA",gxz:"ZV7cFCPUFSequencia",gxold:"OV7cFCPUFSequencia",gxvar:"AV7cFCPUFSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFCPUFSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFCPUFSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFCPUFSEQUENCIA",gx.O.AV7cFCPUFSequencia,0)},c2v:function(){gx.O.AV7cFCPUFSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFCPUFSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFCPUFCODIGO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cfcpufcodigo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFCPUFCODIGO",gxz:"ZV8cFCPUFCodigo",gxold:"OV8cFCPUFCodigo",gxvar:"AV8cFCPUFCodigo",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cFCPUFCodigo=Value},v2z:function(Value){gx.O.ZV8cFCPUFCodigo=Value},v2c:function(){gx.fn.setComboBoxValue("vCFCPUFCODIGO",gx.O.AV8cFCPUFCodigo)},c2v:function(){gx.O.AV8cFCPUFCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCFCPUFCODIGO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFCPUFPERCENTUAL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFCPUFPERCENTUAL",gxz:"ZV9cFCPUFPercentual",gxold:"OV9cFCPUFPercentual",gxvar:"AV9cFCPUFPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cFCPUFPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9cFCPUFPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCFCPUFPERCENTUAL",gx.O.AV9cFCPUFPercentual,4,',')},c2v:function(){gx.O.AV9cFCPUFPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("vCFCPUFPERCENTUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKFCPUFNCMCODIGO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFCPUFNCMCODIGO",gxz:"ZV10cFCPUFNCMCodigo",gxold:"OV10cFCPUFNCMCodigo",gxvar:"AV10cFCPUFNCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cFCPUFNCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cFCPUFNCMCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFCPUFNCMCODIGO",gx.O.AV10cFCPUFNCMCodigo,0)},c2v:function(){gx.O.AV10cFCPUFNCMCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFCPUFNCMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKFCPUFUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFCPUFUSUARIOALT",gxz:"ZV11cFCPUFUsuarioAlt",gxold:"OV11cFCPUFUsuarioAlt",gxvar:"AV11cFCPUFUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cFCPUFUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cFCPUFUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCFCPUFUSUARIOALT",gx.O.AV11cFCPUFUsuarioAlt,0)},c2v:function(){gx.O.AV11cFCPUFUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCFCPUFUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFCPUFDATAHORAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFCPUFDATAHORAALT",gxz:"ZV12cFCPUFDataHoraAlt",gxold:"OV12cFCPUFDataHoraAlt",gxvar:"AV12cFCPUFDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cFCPUFDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cFCPUFDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCFCPUFDATAHORAALT",gx.O.AV12cFCPUFDataHoraAlt,0)},c2v:function(){gx.O.AV12cFCPUFDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCFCPUFDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFEMPRESAID",gxz:"Z10667FCPUFEmpresaId",gxold:"O10667FCPUFEmpresaId",gxvar:"A10667FCPUFEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10667FCPUFEmpresaId=Value},v2z:function(Value){gx.O.Z10667FCPUFEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FCPUFEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A10667FCPUFEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10667FCPUFEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FCPUFEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFSEQUENCIA",gxz:"Z10668FCPUFSequencia",gxold:"O10668FCPUFSequencia",gxvar:"A10668FCPUFSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10668FCPUFSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10668FCPUFSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FCPUFSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A10668FCPUFSequencia,0)},c2v:function(){gx.O.A10668FCPUFSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FCPUFSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFCODIGO",gxz:"Z10686FCPUFCodigo",gxold:"O10686FCPUFCodigo",gxvar:"A10686FCPUFCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A10686FCPUFCodigo=Value},v2z:function(Value){gx.O.Z10686FCPUFCodigo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("FCPUFCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A10686FCPUFCodigo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10686FCPUFCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("FCPUFCODIGO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFPERCENTUAL",gxz:"Z10688FCPUFPercentual",gxold:"O10688FCPUFPercentual",gxvar:"A10688FCPUFPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10688FCPUFPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10688FCPUFPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FCPUFPERCENTUAL",row || gx.fn.currentGridRowImpl(51),gx.O.A10688FCPUFPercentual,4,',')},c2v:function(){gx.O.A10688FCPUFPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FCPUFPERCENTUAL",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFNCMCODIGO",gxz:"Z10669FCPUFNCMCodigo",gxold:"O10669FCPUFNCMCodigo",gxvar:"A10669FCPUFNCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10669FCPUFNCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10669FCPUFNCMCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FCPUFNCMCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A10669FCPUFNCMCodigo,0)},c2v:function(){gx.O.A10669FCPUFNCMCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FCPUFNCMCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFUSUARIOALT",gxz:"Z10689FCPUFUsuarioAlt",gxold:"O10689FCPUFUsuarioAlt",gxvar:"A10689FCPUFUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10689FCPUFUsuarioAlt=Value},v2z:function(Value){gx.O.Z10689FCPUFUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("FCPUFUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A10689FCPUFUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10689FCPUFUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("FCPUFUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FCPUFDATAHORAALT",gxz:"Z10687FCPUFDataHoraAlt",gxold:"O10687FCPUFDataHoraAlt",gxvar:"A10687FCPUFDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10687FCPUFDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10687FCPUFDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("FCPUFDATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A10687FCPUFDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10687FCPUFDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("FCPUFDATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cFCPUFEmpresaId = "" ;
   this.ZV6cFCPUFEmpresaId = "" ;
   this.OV6cFCPUFEmpresaId = "" ;
   this.AV7cFCPUFSequencia = 0 ;
   this.ZV7cFCPUFSequencia = 0 ;
   this.OV7cFCPUFSequencia = 0 ;
   this.AV8cFCPUFCodigo = "" ;
   this.ZV8cFCPUFCodigo = "" ;
   this.OV8cFCPUFCodigo = "" ;
   this.AV9cFCPUFPercentual = 0 ;
   this.ZV9cFCPUFPercentual = 0 ;
   this.OV9cFCPUFPercentual = 0 ;
   this.AV10cFCPUFNCMCodigo = 0 ;
   this.ZV10cFCPUFNCMCodigo = 0 ;
   this.OV10cFCPUFNCMCodigo = 0 ;
   this.AV11cFCPUFUsuarioAlt = "" ;
   this.ZV11cFCPUFUsuarioAlt = "" ;
   this.OV11cFCPUFUsuarioAlt = "" ;
   this.AV12cFCPUFDataHoraAlt = gx.date.nullDate() ;
   this.ZV12cFCPUFDataHoraAlt = gx.date.nullDate() ;
   this.OV12cFCPUFDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10667FCPUFEmpresaId = "" ;
   this.O10667FCPUFEmpresaId = "" ;
   this.Z10668FCPUFSequencia = 0 ;
   this.O10668FCPUFSequencia = 0 ;
   this.Z10686FCPUFCodigo = "" ;
   this.O10686FCPUFCodigo = "" ;
   this.Z10688FCPUFPercentual = 0 ;
   this.O10688FCPUFPercentual = 0 ;
   this.Z10669FCPUFNCMCodigo = 0 ;
   this.O10669FCPUFNCMCodigo = 0 ;
   this.Z10689FCPUFUsuarioAlt = "" ;
   this.O10689FCPUFUsuarioAlt = "" ;
   this.Z10687FCPUFDataHoraAlt = gx.date.nullDate() ;
   this.O10687FCPUFDataHoraAlt = gx.date.nullDate() ;
   this.AV6cFCPUFEmpresaId = "" ;
   this.AV7cFCPUFSequencia = 0 ;
   this.AV8cFCPUFCodigo = "" ;
   this.AV9cFCPUFPercentual = 0 ;
   this.AV10cFCPUFNCMCodigo = 0 ;
   this.AV11cFCPUFUsuarioAlt = "" ;
   this.AV12cFCPUFDataHoraAlt = gx.date.nullDate() ;
   this.AV13pFCPUFEmpresaId = "" ;
   this.AV14pFCPUFSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A10667FCPUFEmpresaId = "" ;
   this.A10668FCPUFSequencia = 0 ;
   this.A10686FCPUFCodigo = "" ;
   this.A10688FCPUFPercentual = 0 ;
   this.A10669FCPUFNCMCodigo = 0 ;
   this.A10689FCPUFUsuarioAlt = "" ;
   this.A10687FCPUFDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e132882_client": ["ENTER", true] ,"e142881_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFCPUFEmpresaId',fld:'vCFCPUFEMPRESAID'},{av:'AV7cFCPUFSequencia',fld:'vCFCPUFSEQUENCIA'},{av:'AV8cFCPUFCodigo',fld:'vCFCPUFCODIGO'},{av:'AV9cFCPUFPercentual',fld:'vCFCPUFPERCENTUAL'},{av:'AV10cFCPUFNCMCodigo',fld:'vCFCPUFNCMCODIGO'},{av:'AV11cFCPUFUsuarioAlt',fld:'vCFCPUFUSUARIOALT'},{av:'AV12cFCPUFDataHoraAlt',fld:'vCFCPUFDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10667FCPUFEmpresaId',fld:'FCPUFEMPRESAID'},{av:'A10668FCPUFSequencia',fld:'FCPUFSEQUENCIA'}],[{av:'AV13pFCPUFEmpresaId',fld:'vPFCPUFEMPRESAID'},{av:'AV14pFCPUFSequencia',fld:'vPFCPUFSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFCPUFEmpresaId',fld:'vCFCPUFEMPRESAID'},{av:'AV7cFCPUFSequencia',fld:'vCFCPUFSEQUENCIA'},{av:'AV8cFCPUFCodigo',fld:'vCFCPUFCODIGO'},{av:'AV9cFCPUFPercentual',fld:'vCFCPUFPERCENTUAL'},{av:'AV10cFCPUFNCMCodigo',fld:'vCFCPUFNCMCODIGO'},{av:'AV11cFCPUFUsuarioAlt',fld:'vCFCPUFUSUARIOALT'},{av:'AV12cFCPUFDataHoraAlt',fld:'vCFCPUFDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFCPUFEmpresaId',fld:'vCFCPUFEMPRESAID'},{av:'AV7cFCPUFSequencia',fld:'vCFCPUFSEQUENCIA'},{av:'AV8cFCPUFCodigo',fld:'vCFCPUFCODIGO'},{av:'AV9cFCPUFPercentual',fld:'vCFCPUFPERCENTUAL'},{av:'AV10cFCPUFNCMCodigo',fld:'vCFCPUFNCMCODIGO'},{av:'AV11cFCPUFUsuarioAlt',fld:'vCFCPUFUSUARIOALT'},{av:'AV12cFCPUFDataHoraAlt',fld:'vCFCPUFDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFCPUFEmpresaId',fld:'vCFCPUFEMPRESAID'},{av:'AV7cFCPUFSequencia',fld:'vCFCPUFSEQUENCIA'},{av:'AV8cFCPUFCodigo',fld:'vCFCPUFCODIGO'},{av:'AV9cFCPUFPercentual',fld:'vCFCPUFPERCENTUAL'},{av:'AV10cFCPUFNCMCodigo',fld:'vCFCPUFNCMCODIGO'},{av:'AV11cFCPUFUsuarioAlt',fld:'vCFCPUFUSUARIOALT'},{av:'AV12cFCPUFDataHoraAlt',fld:'vCFCPUFDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFCPUFEmpresaId',fld:'vCFCPUFEMPRESAID'},{av:'AV7cFCPUFSequencia',fld:'vCFCPUFSEQUENCIA'},{av:'AV8cFCPUFCodigo',fld:'vCFCPUFCODIGO'},{av:'AV9cFCPUFPercentual',fld:'vCFCPUFPERCENTUAL'},{av:'AV10cFCPUFNCMCodigo',fld:'vCFCPUFNCMCODIGO'},{av:'AV11cFCPUFUsuarioAlt',fld:'vCFCPUFUSUARIOALT'},{av:'AV12cFCPUFDataHoraAlt',fld:'vCFCPUFDATAHORAALT'}],[]];
   this.setVCMap("AV13pFCPUFEmpresaId", "vPFCPUFEMPRESAID", 0, "char");
   this.setVCMap("AV14pFCPUFSequencia", "vPFCPUFSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0lx0());
