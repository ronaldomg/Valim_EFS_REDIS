/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:34:57.72
*/
gx.evt.autoSkip = false;
gx.define('gx0ay0', false, function () {
   this.ServerClass =  "gx0ay0" ;
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
      this.AV13pObservacaoNotaEmpresaId=gx.fn.getControlValue("vPOBSERVACAONOTAEMPRESAID") ;
      this.AV14pObservacaoNotaId=gx.fn.getIntegerValue("vPOBSERVACAONOTAID",'.') ;
   };
   this.Validv_Cobservacaonotauf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOBSERVACAONOTAUF");
         this.AnyError  = 0;
         if ( ! ( this.AV11cObservacaoNotaUF == "" || this.AV11cObservacaoNotaUF == "AC" || this.AV11cObservacaoNotaUF == "AL" || this.AV11cObservacaoNotaUF == "AP" || this.AV11cObservacaoNotaUF == "AM" || this.AV11cObservacaoNotaUF == "BA" || this.AV11cObservacaoNotaUF == "CE" || this.AV11cObservacaoNotaUF == "DF" || this.AV11cObservacaoNotaUF == "ES" || this.AV11cObservacaoNotaUF == "GO" || this.AV11cObservacaoNotaUF == "MA" || this.AV11cObservacaoNotaUF == "MT" || this.AV11cObservacaoNotaUF == "MS" || this.AV11cObservacaoNotaUF == "MG" || this.AV11cObservacaoNotaUF == "PA" || this.AV11cObservacaoNotaUF == "PB" || this.AV11cObservacaoNotaUF == "PR" || this.AV11cObservacaoNotaUF == "PE" || this.AV11cObservacaoNotaUF == "PI" || this.AV11cObservacaoNotaUF == "RJ" || this.AV11cObservacaoNotaUF == "RN" || this.AV11cObservacaoNotaUF == "RS" || this.AV11cObservacaoNotaUF == "RO" || this.AV11cObservacaoNotaUF == "RR" || this.AV11cObservacaoNotaUF == "SC" || this.AV11cObservacaoNotaUF == "SP" || this.AV11cObservacaoNotaUF == "SE" || this.AV11cObservacaoNotaUF == "TO" || this.AV11cObservacaoNotaUF == "EX" || (""==this.AV11cObservacaoNotaUF) ) )
         {
            try {
               gxballoon.setError("Campo cObservacaoNotaUF fora do intervalo");
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
   this.e131pl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pl1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ay0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3701,53,"OBSERVACAONOTAEMPRESAID","Empresa da Observação","","ObservacaoNotaEmpresaId","char",0,"px",10,10,"left",null,[],3701,"ObservacaoNotaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3702,54,"OBSERVACAONOTAID","Código da Observação","","ObservacaoNotaId","int",0,"px",4,4,"right",null,[],3702,"ObservacaoNotaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3691,55,"OBSERVACAONOTAPRODUTOEMPID","Empresa Do Produto","","ObservacaoNotaProdutoEmpId","char",0,"px",10,10,"left",null,[],3691,"ObservacaoNotaProdutoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3692,56,"OBSERVACAONOTAPRODUTOID","Código do Produto","","ObservacaoNotaProdutoId","int",0,"px",10,10,"right",null,[],3692,"ObservacaoNotaProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3695,57,"OBSERVACAONOTACFOPCODIGO","Código do CFOP","","ObservacaoNotaCFOPCodigo","int",0,"px",4,4,"right",null,[],3695,"ObservacaoNotaCFOPCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3697,58,"OBSERVACAONOTAUF","UF da Observação","ObservacaoNotaUF","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(3700,59,"OBSERVACAONOTADATAHORAALT","Data/Hora Alteração","","ObservacaoNotaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],3700,"ObservacaoNotaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKOBSERVACAONOTAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSERVACAONOTAEMPRESAID",gxz:"ZV6cObservacaoNotaEmpresaId",gxold:"OV6cObservacaoNotaEmpresaId",gxvar:"AV6cObservacaoNotaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cObservacaoNotaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cObservacaoNotaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCOBSERVACAONOTAEMPRESAID",gx.O.AV6cObservacaoNotaEmpresaId,0)},c2v:function(){gx.O.AV6cObservacaoNotaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCOBSERVACAONOTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKOBSERVACAONOTAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSERVACAONOTAID",gxz:"ZV7cObservacaoNotaId",gxold:"OV7cObservacaoNotaId",gxvar:"AV7cObservacaoNotaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cObservacaoNotaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cObservacaoNotaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOBSERVACAONOTAID",gx.O.AV7cObservacaoNotaId,0)},c2v:function(){gx.O.AV7cObservacaoNotaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBSERVACAONOTAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKOBSERVACAONOTAPRODUTOEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSERVACAONOTAPRODUTOEMPID",gxz:"ZV8cObservacaoNotaProdutoEmpId",gxold:"OV8cObservacaoNotaProdutoEmpId",gxvar:"AV8cObservacaoNotaProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cObservacaoNotaProdutoEmpId=Value},v2z:function(Value){gx.O.ZV8cObservacaoNotaProdutoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCOBSERVACAONOTAPRODUTOEMPID",gx.O.AV8cObservacaoNotaProdutoEmpId,0)},c2v:function(){gx.O.AV8cObservacaoNotaProdutoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCOBSERVACAONOTAPRODUTOEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKOBSERVACAONOTAPRODUTOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSERVACAONOTAPRODUTOID",gxz:"ZV9cObservacaoNotaProdutoId",gxold:"OV9cObservacaoNotaProdutoId",gxvar:"AV9cObservacaoNotaProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cObservacaoNotaProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cObservacaoNotaProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOBSERVACAONOTAPRODUTOID",gx.O.AV9cObservacaoNotaProdutoId,0)},c2v:function(){gx.O.AV9cObservacaoNotaProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBSERVACAONOTAPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKOBSERVACAONOTACFOPCODIGO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSERVACAONOTACFOPCODIGO",gxz:"ZV10cObservacaoNotaCFOPCodigo",gxold:"OV10cObservacaoNotaCFOPCodigo",gxvar:"AV10cObservacaoNotaCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cObservacaoNotaCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cObservacaoNotaCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOBSERVACAONOTACFOPCODIGO",gx.O.AV10cObservacaoNotaCFOPCodigo,0)},c2v:function(){gx.O.AV10cObservacaoNotaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOBSERVACAONOTACFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKOBSERVACAONOTAUF", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cobservacaonotauf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSERVACAONOTAUF",gxz:"ZV11cObservacaoNotaUF",gxold:"OV11cObservacaoNotaUF",gxvar:"AV11cObservacaoNotaUF",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cObservacaoNotaUF=Value},v2z:function(Value){gx.O.ZV11cObservacaoNotaUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCOBSERVACAONOTAUF",gx.O.AV11cObservacaoNotaUF)},c2v:function(){gx.O.AV11cObservacaoNotaUF=this.val()},val:function(){return gx.fn.getControlValue("vCOBSERVACAONOTAUF")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKOBSERVACAONOTAUSUARIOALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOBSERVACAONOTAUSUARIOALT",gxz:"ZV12cObservacaoNotaUsuarioAlt",gxold:"OV12cObservacaoNotaUsuarioAlt",gxvar:"AV12cObservacaoNotaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cObservacaoNotaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV12cObservacaoNotaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCOBSERVACAONOTAUSUARIOALT",gx.O.AV12cObservacaoNotaUsuarioAlt,0)},c2v:function(){gx.O.AV12cObservacaoNotaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCOBSERVACAONOTAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAEMPRESAID",gxz:"Z3701ObservacaoNotaEmpresaId",gxold:"O3701ObservacaoNotaEmpresaId",gxvar:"A3701ObservacaoNotaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3701ObservacaoNotaEmpresaId=Value},v2z:function(Value){gx.O.Z3701ObservacaoNotaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("OBSERVACAONOTAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3701ObservacaoNotaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3701ObservacaoNotaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("OBSERVACAONOTAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAID",gxz:"Z3702ObservacaoNotaId",gxold:"O3702ObservacaoNotaId",gxvar:"A3702ObservacaoNotaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3702ObservacaoNotaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3702ObservacaoNotaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OBSERVACAONOTAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3702ObservacaoNotaId,0)},c2v:function(){gx.O.A3702ObservacaoNotaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OBSERVACAONOTAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAPRODUTOEMPID",gxz:"Z3691ObservacaoNotaProdutoEmpId",gxold:"O3691ObservacaoNotaProdutoEmpId",gxvar:"A3691ObservacaoNotaProdutoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3691ObservacaoNotaProdutoEmpId=Value},v2z:function(Value){gx.O.Z3691ObservacaoNotaProdutoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("OBSERVACAONOTAPRODUTOEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A3691ObservacaoNotaProdutoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3691ObservacaoNotaProdutoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("OBSERVACAONOTAPRODUTOEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAPRODUTOID",gxz:"Z3692ObservacaoNotaProdutoId",gxold:"O3692ObservacaoNotaProdutoId",gxvar:"A3692ObservacaoNotaProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3692ObservacaoNotaProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3692ObservacaoNotaProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OBSERVACAONOTAPRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A3692ObservacaoNotaProdutoId,0)},c2v:function(){gx.O.A3692ObservacaoNotaProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OBSERVACAONOTAPRODUTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTACFOPCODIGO",gxz:"Z3695ObservacaoNotaCFOPCodigo",gxold:"O3695ObservacaoNotaCFOPCodigo",gxvar:"A3695ObservacaoNotaCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3695ObservacaoNotaCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3695ObservacaoNotaCFOPCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OBSERVACAONOTACFOPCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A3695ObservacaoNotaCFOPCodigo,0)},c2v:function(){gx.O.A3695ObservacaoNotaCFOPCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OBSERVACAONOTACFOPCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTAUF",gxz:"Z3697ObservacaoNotaUF",gxold:"O3697ObservacaoNotaUF",gxvar:"A3697ObservacaoNotaUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3697ObservacaoNotaUF=Value},v2z:function(Value){gx.O.Z3697ObservacaoNotaUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OBSERVACAONOTAUF",row || gx.fn.currentGridRowImpl(51),gx.O.A3697ObservacaoNotaUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3697ObservacaoNotaUF=this.val()},val:function(row){return gx.fn.getGridControlValue("OBSERVACAONOTAUF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OBSERVACAONOTADATAHORAALT",gxz:"Z3700ObservacaoNotaDataHoraAlt",gxold:"O3700ObservacaoNotaDataHoraAlt",gxvar:"A3700ObservacaoNotaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3700ObservacaoNotaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3700ObservacaoNotaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OBSERVACAONOTADATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A3700ObservacaoNotaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3700ObservacaoNotaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OBSERVACAONOTADATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cObservacaoNotaEmpresaId = "" ;
   this.ZV6cObservacaoNotaEmpresaId = "" ;
   this.OV6cObservacaoNotaEmpresaId = "" ;
   this.AV7cObservacaoNotaId = 0 ;
   this.ZV7cObservacaoNotaId = 0 ;
   this.OV7cObservacaoNotaId = 0 ;
   this.AV8cObservacaoNotaProdutoEmpId = "" ;
   this.ZV8cObservacaoNotaProdutoEmpId = "" ;
   this.OV8cObservacaoNotaProdutoEmpId = "" ;
   this.AV9cObservacaoNotaProdutoId = 0 ;
   this.ZV9cObservacaoNotaProdutoId = 0 ;
   this.OV9cObservacaoNotaProdutoId = 0 ;
   this.AV10cObservacaoNotaCFOPCodigo = 0 ;
   this.ZV10cObservacaoNotaCFOPCodigo = 0 ;
   this.OV10cObservacaoNotaCFOPCodigo = 0 ;
   this.AV11cObservacaoNotaUF = "" ;
   this.ZV11cObservacaoNotaUF = "" ;
   this.OV11cObservacaoNotaUF = "" ;
   this.AV12cObservacaoNotaUsuarioAlt = "" ;
   this.ZV12cObservacaoNotaUsuarioAlt = "" ;
   this.OV12cObservacaoNotaUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3701ObservacaoNotaEmpresaId = "" ;
   this.O3701ObservacaoNotaEmpresaId = "" ;
   this.Z3702ObservacaoNotaId = 0 ;
   this.O3702ObservacaoNotaId = 0 ;
   this.Z3691ObservacaoNotaProdutoEmpId = "" ;
   this.O3691ObservacaoNotaProdutoEmpId = "" ;
   this.Z3692ObservacaoNotaProdutoId = 0 ;
   this.O3692ObservacaoNotaProdutoId = 0 ;
   this.Z3695ObservacaoNotaCFOPCodigo = 0 ;
   this.O3695ObservacaoNotaCFOPCodigo = 0 ;
   this.Z3697ObservacaoNotaUF = "" ;
   this.O3697ObservacaoNotaUF = "" ;
   this.Z3700ObservacaoNotaDataHoraAlt = gx.date.nullDate() ;
   this.O3700ObservacaoNotaDataHoraAlt = gx.date.nullDate() ;
   this.AV6cObservacaoNotaEmpresaId = "" ;
   this.AV7cObservacaoNotaId = 0 ;
   this.AV8cObservacaoNotaProdutoEmpId = "" ;
   this.AV9cObservacaoNotaProdutoId = 0 ;
   this.AV10cObservacaoNotaCFOPCodigo = 0 ;
   this.AV11cObservacaoNotaUF = "" ;
   this.AV12cObservacaoNotaUsuarioAlt = "" ;
   this.AV13pObservacaoNotaEmpresaId = "" ;
   this.AV14pObservacaoNotaId = 0 ;
   this.A3699ObservacaoNotaUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A3701ObservacaoNotaEmpresaId = "" ;
   this.A3702ObservacaoNotaId = 0 ;
   this.A3691ObservacaoNotaProdutoEmpId = "" ;
   this.A3692ObservacaoNotaProdutoId = 0 ;
   this.A3695ObservacaoNotaCFOPCodigo = 0 ;
   this.A3697ObservacaoNotaUF = "" ;
   this.A3700ObservacaoNotaDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131pl2_client": ["ENTER", true] ,"e141pl1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObservacaoNotaEmpresaId',fld:'vCOBSERVACAONOTAEMPRESAID'},{av:'AV7cObservacaoNotaId',fld:'vCOBSERVACAONOTAID'},{av:'AV8cObservacaoNotaProdutoEmpId',fld:'vCOBSERVACAONOTAPRODUTOEMPID'},{av:'AV9cObservacaoNotaProdutoId',fld:'vCOBSERVACAONOTAPRODUTOID'},{av:'AV10cObservacaoNotaCFOPCodigo',fld:'vCOBSERVACAONOTACFOPCODIGO'},{av:'AV11cObservacaoNotaUF',fld:'vCOBSERVACAONOTAUF'},{av:'AV12cObservacaoNotaUsuarioAlt',fld:'vCOBSERVACAONOTAUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3701ObservacaoNotaEmpresaId',fld:'OBSERVACAONOTAEMPRESAID'},{av:'A3702ObservacaoNotaId',fld:'OBSERVACAONOTAID'}],[{av:'AV13pObservacaoNotaEmpresaId',fld:'vPOBSERVACAONOTAEMPRESAID'},{av:'AV14pObservacaoNotaId',fld:'vPOBSERVACAONOTAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObservacaoNotaEmpresaId',fld:'vCOBSERVACAONOTAEMPRESAID'},{av:'AV7cObservacaoNotaId',fld:'vCOBSERVACAONOTAID'},{av:'AV8cObservacaoNotaProdutoEmpId',fld:'vCOBSERVACAONOTAPRODUTOEMPID'},{av:'AV9cObservacaoNotaProdutoId',fld:'vCOBSERVACAONOTAPRODUTOID'},{av:'AV10cObservacaoNotaCFOPCodigo',fld:'vCOBSERVACAONOTACFOPCODIGO'},{av:'AV11cObservacaoNotaUF',fld:'vCOBSERVACAONOTAUF'},{av:'AV12cObservacaoNotaUsuarioAlt',fld:'vCOBSERVACAONOTAUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObservacaoNotaEmpresaId',fld:'vCOBSERVACAONOTAEMPRESAID'},{av:'AV7cObservacaoNotaId',fld:'vCOBSERVACAONOTAID'},{av:'AV8cObservacaoNotaProdutoEmpId',fld:'vCOBSERVACAONOTAPRODUTOEMPID'},{av:'AV9cObservacaoNotaProdutoId',fld:'vCOBSERVACAONOTAPRODUTOID'},{av:'AV10cObservacaoNotaCFOPCodigo',fld:'vCOBSERVACAONOTACFOPCODIGO'},{av:'AV11cObservacaoNotaUF',fld:'vCOBSERVACAONOTAUF'},{av:'AV12cObservacaoNotaUsuarioAlt',fld:'vCOBSERVACAONOTAUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObservacaoNotaEmpresaId',fld:'vCOBSERVACAONOTAEMPRESAID'},{av:'AV7cObservacaoNotaId',fld:'vCOBSERVACAONOTAID'},{av:'AV8cObservacaoNotaProdutoEmpId',fld:'vCOBSERVACAONOTAPRODUTOEMPID'},{av:'AV9cObservacaoNotaProdutoId',fld:'vCOBSERVACAONOTAPRODUTOID'},{av:'AV10cObservacaoNotaCFOPCodigo',fld:'vCOBSERVACAONOTACFOPCODIGO'},{av:'AV11cObservacaoNotaUF',fld:'vCOBSERVACAONOTAUF'},{av:'AV12cObservacaoNotaUsuarioAlt',fld:'vCOBSERVACAONOTAUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cObservacaoNotaEmpresaId',fld:'vCOBSERVACAONOTAEMPRESAID'},{av:'AV7cObservacaoNotaId',fld:'vCOBSERVACAONOTAID'},{av:'AV8cObservacaoNotaProdutoEmpId',fld:'vCOBSERVACAONOTAPRODUTOEMPID'},{av:'AV9cObservacaoNotaProdutoId',fld:'vCOBSERVACAONOTAPRODUTOID'},{av:'AV10cObservacaoNotaCFOPCodigo',fld:'vCOBSERVACAONOTACFOPCODIGO'},{av:'AV11cObservacaoNotaUF',fld:'vCOBSERVACAONOTAUF'},{av:'AV12cObservacaoNotaUsuarioAlt',fld:'vCOBSERVACAONOTAUSUARIOALT'}],[]];
   this.setVCMap("AV13pObservacaoNotaEmpresaId", "vPOBSERVACAONOTAEMPRESAID", 0, "char");
   this.setVCMap("AV14pObservacaoNotaId", "vPOBSERVACAONOTAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ay0());
